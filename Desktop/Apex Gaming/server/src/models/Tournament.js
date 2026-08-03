const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    logo: String,
    banner: String,
    game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
    prizePool: String,
    currency: { type: String, default: 'INR' },
    location: String,
    format: String,
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
      default: 'upcoming',
    },
    startDate: Date,
    endDate: Date,
    schedule: [{ date: Date, matches: [{ team1: String, team2: String, time: String }] }],
    standings: [{ rank: Number, team: String, points: Number, wins: Number, losses: Number }],
    teamRanking: Number,
    description: String,
    organizer: String,
    streamUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tournament', tournamentSchema);
