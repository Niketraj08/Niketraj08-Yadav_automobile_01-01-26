const express = require('express');
const { submitApplication, updateStatus } = require('../controllers/applicationController');
const { protect, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'clips', maxCount: 5 }]), submitApplication);
router.put('/:id/status', protect, authorize('super_admin', 'manager', 'coach'), updateStatus);

module.exports = router;
