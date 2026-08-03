const express = require('express');
const { createOrder, verifyPayment, trackOrder, validateCoupon } = require('../controllers/storeController');
const { protect } = require('../middleware/auth');
const misc = require('./miscRoutes');

const router = express.Router();

router.post('/orders', createOrder);
router.post('/orders/verify', verifyPayment);
router.get('/orders/track/:orderNumber', trackOrder);
router.get('/coupons/:code', validateCoupon);
router.use('/products', misc.products);
router.use('/orders/admin', protect, misc.orders);

module.exports = router;
