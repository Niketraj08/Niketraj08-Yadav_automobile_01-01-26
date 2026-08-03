const Settings = require('../models/Settings');
const Player = require('../models/Player');
const Tournament = require('../models/Tournament');
const Match = require('../models/Match');
const News = require('../models/News');
const Order = require('../models/Order');
const Application = require('../models/Application');

exports.getDashboardStats = async (req, res, next) => {
  try {
    const [players, tournaments, matches, news, orders, applications] = await Promise.all([
      Player.countDocuments({ isActive: true }),
      Tournament.countDocuments(),
      Match.countDocuments({ status: 'live' }),
      News.countDocuments({ isPublished: true }),
      Order.countDocuments({ paymentStatus: 'paid' }),
      Application.countDocuments({ status: 'pending' }),
    ]);

    const revenue = await Order.aggregate([
      { $match: { paymentStatus: 'paid' } },
      { $group: { _id: null, total: { $sum: '$total' } } },
    ]);

    res.json({
      success: true,
      data: {
        players,
        tournaments,
        liveMatches: matches,
        news,
        orders,
        pendingApplications: applications,
        revenue: revenue[0]?.total || 0,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.getSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create({});
    res.json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
};

exports.updateSettings = async (req, res, next) => {
  try {
    let settings = await Settings.findOne();
    if (!settings) settings = await Settings.create(req.body);
    else settings = await Settings.findByIdAndUpdate(settings._id, req.body, { new: true });
    res.json({ success: true, data: settings });
  } catch (error) {
    next(error);
  }
};

exports.submitContact = async (req, res, next) => {
  try {
    res.json({ success: true, message: 'Message received. We will get back to you soon!' });
  } catch (error) {
    next(error);
  }
};
