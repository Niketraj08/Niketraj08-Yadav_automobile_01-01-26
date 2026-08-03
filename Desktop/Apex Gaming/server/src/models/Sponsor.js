const mongoose = require('mongoose');

const sponsorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: String,
    website: String,
    tier: { type: String, enum: ['title', 'gold', 'silver', 'bronze', 'partner'], default: 'partner' },
    description: String,
    partnershipInfo: String,
    since: Date,
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sponsor', sponsorSchema);
