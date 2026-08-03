const createCrudController = (Model, options = {}) => {
  const { populate = '', slugField = 'name' } = options;

  return {
    getAll: async (req, res, next) => {
      try {
        const filter = { ...req.query };
        delete filter.page;
        delete filter.limit;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        Object.keys(filter).forEach((key) => {
          if (filter[key] === 'true') filter[key] = true;
          if (filter[key] === 'false') filter[key] = false;
        });

        let query = Model.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
        if (populate) query = query.populate(populate);
        const data = await query;
        const total = await Model.countDocuments(filter);
        res.json({ success: true, data, total, page, pages: Math.ceil(total / limit) });
      } catch (error) {
        next(error);
      }
    },

    getOne: async (req, res, next) => {
      try {
        let query = Model.findById(req.params.id);
        if (populate) query = query.populate(populate);
        const data = await query;
        if (!data) return res.status(404).json({ success: false, message: 'Not found' });
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    getBySlug: async (req, res, next) => {
      try {
        let query = Model.findOne({ slug: req.params.slug });
        if (populate) query = query.populate(populate);
        const data = await query;
        if (!data) return res.status(404).json({ success: false, message: 'Not found' });
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    create: async (req, res, next) => {
      try {
        const body = { ...req.body };
        if (slugField && body[slugField] && !body.slug) {
          const { slugify } = require('../utils/helpers');
          body.slug = slugify(body[slugField]);
        }
        const data = await Model.create(body);
        res.status(201).json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    update: async (req, res, next) => {
      try {
        const data = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) return res.status(404).json({ success: false, message: 'Not found' });
        res.json({ success: true, data });
      } catch (error) {
        next(error);
      }
    },

    remove: async (req, res, next) => {
      try {
        const data = await Model.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ success: false, message: 'Not found' });
        res.json({ success: true, message: 'Deleted' });
      } catch (error) {
        next(error);
      }
    },
  };
};

module.exports = createCrudController;
