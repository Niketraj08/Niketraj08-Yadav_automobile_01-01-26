const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const Media = require('../models/Media');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Sponsor = require('../models/Sponsor');
const Application = require('../models/Application');
const TeamMember = require('../models/TeamMember');
const Coupon = require('../models/Coupon');
const Achievement = require('../models/Achievement');

const https = require('https');

const makeRoute = (Model, opts = {}, roles = ['super_admin', 'manager', 'content_manager']) => {
  const router = express.Router();
  const crud = createCrudController(Model, opts);
  router.get('/', crud.getAll);
  router.get('/:id', crud.getOne);
  router.post('/', protect, authorize(...roles), crud.create);
  router.put('/:id', protect, authorize(...roles), crud.update);
  router.delete('/:id', protect, authorize('super_admin', 'manager'), crud.remove);
  return router;
};

const mediaRouter = makeRoute(Media, { populate: 'game tournament' });

mediaRouter.get('/youtube/videos', (req, res) => {
  const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCNoiWmvkDUL0q-6ECxNFH0Q';
  const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

  https.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
      try {
        const videos = [];
        const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
        let match;
        while ((match = entryRegex.exec(data)) !== null) {
          const entryContent = match[1];
          
          const videoIdMatch = entryContent.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
          const titleMatch = entryContent.match(/<title>([^<]+)<\/title>/);
          const publishedMatch = entryContent.match(/<published>([^<]+)<\/published>/);
          
          if (videoIdMatch && titleMatch) {
            const videoId = videoIdMatch[1];
            // Decode simple HTML entities if any
            const title = titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            const published = publishedMatch ? publishedMatch[1] : new Date().toISOString();
            
            videos.push({
              _id: `yt-${videoId}`,
              title: title,
              type: 'video',
              youtubeId: videoId,
              url: `https://www.youtube.com/watch?v=${videoId}`,
              thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
              createdAt: published
            });
          }
        }
        res.json({ success: true, data: videos });
      } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to parse YouTube feed' });
      }
    });
  }).on('error', (err) => {
    res.status(500).json({ success: false, message: 'Failed to fetch YouTube feed' });
  });
});

module.exports = {
  media: mediaRouter,
  products: makeRoute(Product, { slugField: 'name' }, ['super_admin', 'manager']),
  orders: makeRoute(Order, { populate: 'user' }, ['super_admin', 'manager']),
  sponsors: makeRoute(Sponsor, {}, ['super_admin', 'manager', 'content_manager']),
  applications: makeRoute(Application, {}, ['super_admin', 'manager', 'coach']),
  teamMembers: makeRoute(TeamMember, {}, ['super_admin', 'manager', 'content_manager']),
  coupons: makeRoute(Coupon, {}, ['super_admin', 'manager']),
  achievements: makeRoute(Achievement, {}, ['super_admin', 'manager']),
};
