const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: 'Team Apex Gaming' },
    tagline: String,
    logo: String,
    favicon: String,
    heroVideo: String,
    contactEmail: String,
    contactPhone: String,
    address: String,
    mapEmbed: String,
    socialLinks: {
      twitter: String,
      instagram: String,
      youtube: String,
      discord: String,
      facebook: String,
      twitch: String,
    },
    founderMessage: { name: String, title: String, message: String, photo: String },
    stats: {
      tournamentsWon: Number,
      totalPrize: String,
      activePlayers: Number,
      yearsActive: Number,
    },
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    darkModeDefault: { type: Boolean, default: true },
    discordWebhook: String,
    whatsappNumber: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Settings', settingsSchema);
