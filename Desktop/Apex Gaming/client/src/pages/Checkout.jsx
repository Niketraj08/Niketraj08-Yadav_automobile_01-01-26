import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Button from '../components/ui/Button';
import { useCartStore } from '../store';
import { createOrder, validateCoupon, verifyOrderPayment } from '../api';
import { formatCurrency } from '../utils/constants';
import MockRazorpayModal from '../components/ui/MockRazorpayModal';
import './Store.css';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', state: '', pincode: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [createdOrder, setCreatedOrder] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const applyCoupon = async () => {
    try {
      const res = await validateCoupon(coupon);
      const c = res.data;
      const disc = c.discountType === 'percentage' ? (total() * c.discountValue) / 100 : c.discountValue;
      setDiscount(disc);
      toast.success('Coupon applied!');
    } catch {
      toast.error('Invalid coupon code');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await createOrder({
        items: items.map((i) => ({ productId: i.productId, quantity: i.quantity, variant: i.variant })),
        shippingAddress: form,
        couponCode: discount > 0 ? coupon : undefined,
      });
      setCreatedOrder(res.data);
      setModalOpen(true);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to initiate checkout');
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentDetails) => {
    try {
      await verifyOrderPayment({
        orderId: createdOrder._id,
        razorpay_order_id: createdOrder.razorpayOrderId,
        razorpay_payment_id: paymentDetails.razorpay_payment_id,
        razorpay_signature: paymentDetails.razorpay_signature,
      });
      setModalOpen(false);
      clearCart();
      toast.success('Order placed successfully!');
      navigate(`/store/order/${createdOrder.orderNumber}`);
    } catch (err) {
      toast.error('Payment verification failed');
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      navigate('/store/cart');
    }
  }, [items, navigate]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div className="section">
      <Helmet><title>Checkout | Team Apex Gaming</title></Helmet>
      <div className="container checkout-form">
        <h1 className="section-title" style={{ marginBottom: '2rem', textAlign: 'center' }}>Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Shipping Details</h3>
            <div className="checkout-grid">
              <div className="form-group"><label>Name</label><input name="name" required value={form.name} onChange={handleChange} /></div>
              <div className="form-group"><label>Email</label><input name="email" type="email" required value={form.email} onChange={handleChange} /></div>
              <div className="form-group"><label>Phone</label><input name="phone" required value={form.phone} onChange={handleChange} /></div>
              <div className="form-group"><label>Pincode</label><input name="pincode" required value={form.pincode} onChange={handleChange} /></div>
            </div>
            <div className="form-group"><label>Address</label><textarea name="address" required rows={2} value={form.address} onChange={handleChange} /></div>
            <div className="checkout-grid">
              <div className="form-group"><label>City</label><input name="city" required value={form.city} onChange={handleChange} /></div>
              <div className="form-group"><label>State</label><input name="state" required value={form.state} onChange={handleChange} /></div>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Coupon Code</h3>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Enter coupon code" style={{ flex: 1 }} />
              <button type="button" className="btn btn-outline" onClick={applyCoupon}>Apply</button>
            </div>
          </div>

          <div className="glass-card cart-summary">
            <div className="cart-summary-row"><span>Subtotal ({items.length} items)</span><span>{formatCurrency(total())}</span></div>
            {discount > 0 && <div className="cart-summary-row"><span>Discount</span><span>-{formatCurrency(discount)}</span></div>}
            <div className="cart-summary-row total"><span>Total</span><span>{formatCurrency(Math.max(0, total() - discount))}</span></div>
            <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1.5rem', justifyContent: 'center' }} disabled={loading}>
              {loading ? 'Processing...' : 'Pay with Razorpay'}
            </Button>
          </div>
        </form>
      </div>
      {createdOrder && (
        <MockRazorpayModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          amount={Math.max(0, total() - discount)}
          orderNumber={createdOrder.orderNumber}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}
