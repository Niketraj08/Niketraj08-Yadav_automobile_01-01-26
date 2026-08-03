const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    phone: String,
    game: { type: String, required: true },
    rank: String,
    achievements: String,
    resume: String,
    gameplayClips: [String],
    status: {
      type: String,
      enum: ['pending', 'reviewing', 'shortlisted', 'rejected', 'accepted'],
      default: 'pending',
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
