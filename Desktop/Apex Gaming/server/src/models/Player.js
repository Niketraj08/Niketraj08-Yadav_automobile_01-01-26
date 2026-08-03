const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema(
  {
    ign: { type: String, required: true },
    realName: { type: String, required: true },
    photo: String,
    banner: String,
    country: { type: String, default: 'India' },
    role: String,
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
    socialLinks: {
      twitter: String,
      instagram: String,
      youtube: String,
      twitch: String,
      discord: String,
    },
    statistics: {
      kd: Number,
      winRate: Number,
      matchesPlayed: Number,
      kills: Number,
      headshotPercentage: Number,
      custom: mongoose.Schema.Types.Mixed,
    },
    achievements: [mongoose.Schema.Types.Mixed],
    awards: [mongoose.Schema.Types.Mixed],
    careerHistory: [{ team: String, game: String, from: Date, to: Date, role: String }],
    teamHistory: [{ event: String, placement: String, date: Date }],
    gallery: [String],
    highlightsVideo: String,
    biography: String,
    joinDate: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Player', playerSchema);
