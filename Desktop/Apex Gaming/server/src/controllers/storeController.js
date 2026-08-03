const Order = require('../models/Order');
const Product = require('../models/Product');
const Coupon = require('../models/Coupon');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const getRazorpay = () => {
  const keyId = process.env.RAZORPAY_KEY_ID;
  if (!keyId || !keyId.startsWith('rzp_')) return null;
  return new Razorpay({
    key_id: keyId,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

exports.createOrder = async (req, res, next) => {
  try {
    const { items, shippingAddress, couponCode } = req.body;
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) continue;
      subtotal += product.price * item.quantity;
      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        variant: item.variant,
        image: product.images[0],
      });
    }

    let discount = 0;
    if (couponCode) {
      const coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), isActive: true });
      if (coupon && (!coupon.expiresAt || coupon.expiresAt > new Date())) {
        discount = coupon.discountType === 'percentage'
          ? (subtotal * coupon.discountValue) / 100
          : coupon.discountValue;
        coupon.usedCount += 1;
        await coupon.save();
      }
    }

    const total = Math.max(0, subtotal - discount);
    const orderNumber = `TAG-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    const order = await Order.create({
      user: req.user?._id,
      orderNumber,
      items: orderItems,
      subtotal,
      discount,
      couponCode,
      total,
      shippingAddress,
    });

    const razorpay = getRazorpay();
    if (razorpay) {
      const razorpayOrder = await razorpay.orders.create({
        amount: Math.round(total * 100),
        currency: 'INR',
        receipt: orderNumber,
      });
      order.razorpayOrderId = razorpayOrder.id;
      await order.save();
      return res.status(201).json({ success: true, data: order, razorpayOrderId: razorpayOrder.id });
    }

    res.status(201).json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

exports.verifyPayment = async (req, res, next) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
    
    const razorpay = getRazorpay();
    if (!razorpay) {
      const order = await Order.findByIdAndUpdate(
        orderId,
        { paymentStatus: 'paid', razorpayPaymentId: razorpay_payment_id || 'pay_mock123456', status: 'confirmed' },
        { new: true }
      );
      return res.json({ success: true, data: order, message: 'Mock payment verified successfully' });
    }

    const body = razorpay_order_id + '|' + razorpay_payment_id;
    const expected = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    if (expected !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    const order = await Order.findByIdAndUpdate(
      orderId,
      { paymentStatus: 'paid', razorpayPaymentId: razorpay_payment_id, status: 'confirmed' },
      { new: true }
    );
    res.json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

exports.trackOrder = async (req, res, next) => {
  try {
    const order = await Order.findOne({ orderNumber: req.params.orderNumber });
    if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
    res.json({ success: true, data: order });
  } catch (error) {
    next(error);
  }
};

exports.validateCoupon = async (req, res, next) => {
  try {
    const coupon = await Coupon.findOne({ code: req.params.code.toUpperCase(), isActive: true });
    if (!coupon) return res.status(404).json({ success: false, message: 'Invalid coupon' });
    if (coupon.expiresAt && coupon.expiresAt < new Date()) {
      return res.status(400).json({ success: false, message: 'Coupon expired' });
    }
    res.json({ success: true, data: coupon });
  } catch (error) {
    next(error);
  }
};
