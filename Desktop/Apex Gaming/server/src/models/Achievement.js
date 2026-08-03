const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    game: {
      type: String,
      required: true,
      enum: ['bgmi', 'valorant', 'cs2', 'freefire', 'pokemon', 'other'],
    },
    dateAchieved: {
      type: Date,
      default: Date.now,
    },
    placement: {
      type: String,
      default: 'Champion',
    },
    type: {
      type: String,
      enum: ['team', 'player'],
      default: 'team',
    },
    prizePool: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Achievement', achievementSchema);
