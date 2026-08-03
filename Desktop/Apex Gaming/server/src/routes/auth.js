const express = require('express');
const { register, login, getMe, logout, getUsers, updateUserRole } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/logout', logout);
router.get('/users', protect, authorize('super_admin'), getUsers);
router.put('/users/:id/role', protect, authorize('super_admin'), updateUserRole);

module.exports = router;
