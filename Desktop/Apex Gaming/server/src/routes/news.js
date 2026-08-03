const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const News = require('../models/News');

const router = express.Router();
const crud = createCrudController(News, { populate: 'author', slugField: 'title' });

router.get('/', async (req, res, next) => {
  try {
    const filter = { ...req.query, isPublished: true };
    delete filter.page;
    delete filter.limit;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const data = await News.find(filter).populate('author').sort({ publishedAt: -1 }).skip((page - 1) * limit).limit(limit);
    const total = await News.countDocuments(filter);
    res.json({ success: true, data, total, page });
  } catch (e) { next(e); }
});

router.get('/admin/all', protect, authorize('super_admin', 'content_manager'), crud.getAll);
router.get('/slug/:slug', async (req, res, next) => {
  try {
    const article = await News.findOneAndUpdate({ slug: req.params.slug, isPublished: true }, { $inc: { views: 1 } }, { new: true }).populate('author');
    if (!article) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: article });
  } catch (e) { next(e); }
});
router.get('/:id', crud.getOne);
router.post('/', protect, authorize('super_admin', 'content_manager'), crud.create);
router.put('/:id', protect, authorize('super_admin', 'content_manager'), crud.update);
router.delete('/:id', protect, authorize('super_admin', 'content_manager'), crud.remove);

module.exports = router;
