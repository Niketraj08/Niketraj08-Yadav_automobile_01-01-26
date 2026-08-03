const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema(
  {
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
    team1: { name: String, logo: String, score: Number },
    team2: { name: String, logo: String, score: Number },
    status: {
      type: String,
      enum: ['scheduled', 'live', 'completed', 'cancelled'],
      default: 'scheduled',
    },
    scheduledAt: Date,
    completedAt: Date,
    mvp: { player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' }, stats: mongoose.Schema.Types.Mixed },
    statistics: mongoose.Schema.Types.Mixed,
    streamUrl: String,
    highlights: [String],
    round: String,
    format: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Match', matchSchema);
