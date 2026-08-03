const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const Match = require('../models/Match');

const router = express.Router();
const crud = createCrudController(Match, { populate: 'tournament game' });

router.get('/', crud.getAll);
router.get('/live', async (req, res, next) => {
  try {
    const matches = await Match.find({ status: 'live' }).populate('tournament game');
    res.json({ success: true, data: matches });
  } catch (e) { next(e); }
});
router.get('/:id', crud.getOne);
router.post('/', protect, authorize('super_admin', 'manager', 'content_manager'), crud.create);
router.put('/:id', protect, authorize('super_admin', 'manager', 'content_manager'), crud.update);
router.delete('/:id', protect, authorize('super_admin', 'manager'), crud.remove);

module.exports = router;
