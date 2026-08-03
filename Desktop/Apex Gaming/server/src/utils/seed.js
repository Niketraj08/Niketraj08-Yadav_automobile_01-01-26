require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Game = require('../models/Game');
const Settings = require('../models/Settings');
const TeamMember = require('../models/TeamMember');
const Player = require('../models/Player');
const Sponsor = require('../models/Sponsor');
const News = require('../models/News');
const Product = require('../models/Product');
const Tournament = require('../models/Tournament');
const Match = require('../models/Match');

const GAMES = [
  { name: 'BGMI', slug: 'bgmi', order: 1 },
  { name: 'FREE FIRE MAX', slug: 'free-fire-max', order: 2 },
  { name: 'APEX LEGENDS', slug: 'apex-legends', order: 3 },
  { name: 'VALORANT', slug: 'valorant', order: 4 },
  { name: 'CS2', slug: 'cs2', order: 5 },
  { name: 'COD MOBILE', slug: 'cod-mobile', order: 6 },
];

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/team-apex-gaming');
  console.log('Connected for seeding...');

  await Promise.all([
    User.deleteMany(), Game.deleteMany(), Settings.deleteMany(),
    TeamMember.deleteMany(), Player.deleteMany(), Sponsor.deleteMany(),
    News.deleteMany(), Product.deleteMany(), Tournament.deleteMany(), Match.deleteMany(),
  ]);

  await User.create({
    name: 'Super Admin',
    email: 'admin@teamapexgaming.com',
    password: 'admin123',
    role: 'super_admin',
  });

  const games = await Game.insertMany(GAMES);
  const bgmi = games.find((g) => g.slug === 'bgmi');
  const valorant = games.find((g) => g.slug === 'valorant');

  await Settings.create({
    siteName: 'Team Apex Gaming',
    tagline: 'Rise Above. Dominate Always.',
    contactEmail: 'contact@teamapexgaming.com',
    contactPhone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India',
    founderMessage: {
      name: 'Apex Founder',
      title: 'Founder & CEO',
      message: 'We built Team Apex Gaming to redefine Indian esports. Our legacy is written in every clutch, every championship, and every fan who believes in us.',
    },
    stats: { tournamentsWon: 47, totalPrize: '₹2.5 Cr+', activePlayers: 36, yearsActive: 5 },
    socialLinks: {
      twitter: 'https://twitter.com/teamapexgaming',
      instagram: 'https://instagram.com/teamapexgaming',
      youtube: 'https://youtube.com/teamapexgaming',
      discord: 'https://discord.gg/teamapexgaming',
    },
  });

  await TeamMember.insertMany([
    { name: 'Rajesh Kumar', designation: 'Founder & CEO', type: 'founder', order: 1, biography: 'Visionary leader who founded Team Apex Gaming with a dream to put India on the global esports map.' },
    { name: 'Priya Sharma', designation: 'Co-Founder & COO', type: 'co_founder', order: 2, biography: 'Operations mastermind driving team growth and partnerships across India.' },
    { name: 'Arjun Mehta', designation: 'Head Coach', type: 'coach', order: 3, biography: 'Former pro player turned elite coach with 10+ years of competitive experience.' },
    { name: 'Sneha Reddy', designation: 'Performance Analyst', type: 'analyst', order: 4, biography: 'Data-driven analyst optimizing team strategies and player performance.' },
  ]);

  await Player.insertMany([
    { ign: 'Jelly', realName: 'Mukesh Singh', country: 'India', role: 'IGL', game: bgmi._id, slug: 'jelly', photo: '/assets/IGL.png', isFeatured: true, statistics: { kd: 4.85, winRate: 74, matchesPlayed: 450, kills: 2180 }, achievements: [{ title: 'BGIS 2024 Champion', year: 2024, tournament: 'BGIS' }] },
    { ign: 'Jonathan', realName: 'Jonathan Amaral', country: 'India', role: 'Assaulter', game: bgmi._id, slug: 'jonathan', photo: '/assets/TAG_Jonathan_2026 free man.png', isFeatured: true, statistics: { kd: 6.2, winRate: 78, matchesPlayed: 520, kills: 3120 } },
    { ign: 'Harsh', realName: 'Harsh Rao', country: 'India', role: 'Assaulter', game: bgmi._id, slug: 'harsh', photo: '/assets/tag_harsh  asulter.jpg', isFeatured: true, statistics: { kd: 4.5, winRate: 70, matchesPlayed: 380, kills: 1710 } },
    { ign: 'Hydro', realName: 'Hydro Vyas', country: 'India', role: 'Assaulter', game: bgmi._id, slug: 'hydro', photo: '/assets/tag_hydro asulter.jpg', isFeatured: true, statistics: { kd: 4.3, winRate: 68, matchesPlayed: 410, kills: 1763 } },
    { ign: 'KioLmao', realName: 'Kio Lmao', country: 'India', role: 'Free Man', game: bgmi._id, slug: 'kiolmao', photo: '/assets/TAG_KioLmao_2026 free man.png', isFeatured: true, statistics: { kd: 4.6, winRate: 71, matchesPlayed: 390, kills: 1794 } },
    { ign: 'NeonBlitz', realName: 'Karan Patel', country: 'India', role: 'Duelist', game: valorant._id, slug: 'neon-blitz', isFeatured: true, statistics: { kd: 1.35, winRate: 65, matchesPlayed: 200, kills: 890 } },
  ]);

  await Sponsor.insertMany([
    { name: 'HyperX', tier: 'title', description: 'Official gaming peripherals partner', order: 1 },
    { name: 'Red Bull', tier: 'gold', description: 'Energy drink partner', order: 2 },
    { name: 'AMD', tier: 'gold', description: 'Official hardware partner', order: 3 },
  ]);

  await News.insertMany([
    { title: 'Team Apex Gaming Wins BGIS 2024', slug: 'team-apex-wins-bgis-2024', excerpt: 'Historic victory at the biggest BGMI tournament in India.', content: '<p>Team Apex Gaming has made history by winning BGIS 2024, cementing their position as India\'s premier esports organization.</p>', category: 'team_news', isPublished: true, publishedAt: new Date() },
    { title: 'New Valorant Roster Announcement', slug: 'new-valorant-roster', excerpt: 'Meet our revamped Valorant lineup ready to conquer VCT.', content: '<p>We are thrilled to announce our new Valorant roster featuring top-tier talent from across India.</p>', category: 'announcement', isPublished: true, publishedAt: new Date() },
  ]);

  await Product.insertMany([
    { name: 'Team Apex Jersey', slug: 'tag-jersey', category: 'jersey', price: 2499, comparePrice: 2999, stock: 100, isFeatured: true, images: ['/assets/tag.jersy.jpg'], description: 'Official Team Apex Gaming jersey with premium fabric.' },
    { name: 'Apex Legacy Hoodie', slug: 'legacy-hoodie', category: 'hoodie', price: 3499, stock: 50, isFeatured: true, images: ['/assets/tag.jersy.jpg'], description: 'Premium black hoodie with orange accent detailing.' },
    { name: 'TAG Gaming Mousepad XL', slug: 'gaming-mousepad', category: 'mousepad', price: 999, stock: 200, images: ['/assets/tag.jersy.jpg'], description: 'Extended RGB gaming mousepad with Team Apex branding.' },
  ]);

  const tournament = await Tournament.create({
    name: 'BGIS 2024',
    slug: 'bgis-2024',
    game: bgmi._id,
    prizePool: '₹1 Crore',
    location: 'Mumbai, India',
    status: 'completed',
    startDate: new Date('2024-08-01'),
    endDate: new Date('2024-08-15'),
    teamRanking: 1,
    standings: [
      { rank: 1, team: 'Team Apex Gaming', points: 156, position : 5 },
      // { rank: 2, team: 'Team Soul', points: 142, wins: 3, losses: 2 },
    ],
  });

  await Match.create({
    tournament: tournament._id,
    game: bgmi._id,
    team1: { name: 'Team Apex Gaming', score: 98 },
    team2: { name: 'Team Soul', score: 72 },
    status: 'completed',
    scheduledAt: new Date('2024-08-14'),
    round: 'Grand Finals',
  });

  console.log('Seed completed!');
  console.log('Admin: admin@teamapexgaming.com / admin123');
  process.exit(0);
};

seed().catch((e) => { console.error(e); process.exit(1); });
