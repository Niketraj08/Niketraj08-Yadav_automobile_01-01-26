const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    excerpt: String,
    content: { type: String, required: true },
    category: {
      type: String,
      enum: ['team_news', 'tournament_news', 'transfer_news', 'announcement', 'community_update'],
      default: 'team_news',
    },
    featuredImage: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tags: [String],
    embeddedVideos: [String],
    isPublished: { type: Boolean, default: false },
    publishedAt: Date,
    scheduledAt: Date,
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('News', newsSchema);
