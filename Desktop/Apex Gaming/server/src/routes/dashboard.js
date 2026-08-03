const express = require('express');
const { getDashboardStats, getSettings, updateSettings, submitContact } = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/stats', protect, authorize('super_admin', 'manager', 'coach', 'content_manager'), getDashboardStats);
router.get('/settings', getSettings);
router.put('/settings', protect, authorize('super_admin', 'content_manager'), updateSettings);
router.post('/contact', submitContact);

module.exports = router;
