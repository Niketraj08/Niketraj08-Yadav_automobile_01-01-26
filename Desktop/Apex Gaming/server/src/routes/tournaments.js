const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const Tournament = require('../models/Tournament');

const router = express.Router();
const crud = createCrudController(Tournament, { populate: 'game' });

router.get('/', crud.getAll);
router.get('/:id', crud.getOne);
router.get('/slug/:slug', crud.getBySlug);
router.post('/', protect, authorize('super_admin', 'manager', 'content_manager'), crud.create);
router.put('/:id', protect, authorize('super_admin', 'manager', 'content_manager'), crud.update);
router.delete('/:id', protect, authorize('super_admin', 'manager'), crud.remove);

module.exports = router;
