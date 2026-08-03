const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const Game = require('../models/Game');

const router = express.Router();
const crud = createCrudController(Game);

router.get('/', crud.getAll);
router.get('/:id', crud.getOne);
router.get('/slug/:slug', crud.getBySlug);
router.post('/', protect, authorize('super_admin', 'manager'), crud.create);
router.put('/:id', protect, authorize('super_admin', 'manager'), crud.update);
router.delete('/:id', protect, authorize('super_admin', 'manager'), crud.remove);

module.exports = router;
