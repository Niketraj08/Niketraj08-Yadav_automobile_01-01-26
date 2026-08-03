const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema(
  {
    title: String,
    type: { type: String, enum: ['photo', 'video', 'short', 'highlight'], required: true },
    url: { type: String, required: true },
    thumbnail: String,
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
    youtubeId: String,
    instagramId: String,
    tags: [String],
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Media', mediaSchema);
