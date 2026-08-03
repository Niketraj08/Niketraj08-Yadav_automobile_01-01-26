const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    type: {
      type: String,
      enum: ['founder', 'co_founder', 'manager', 'coach', 'analyst'],
      required: true,
    },
    photo: String,
    biography: String,
    socialLinks: {
      twitter: String,
      instagram: String,
      linkedin: String,
      youtube: String,
    },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('TeamMember', teamMemberSchema);
