export const GAMES = [
  { name: 'BGMI', slug: 'bgmi', color: '#FF6B00' },
  { name: 'FREE FIRE MAX', slug: 'free-fire-max', color: '#FFD700' },
  { name: 'APEX LEGENDS', slug: 'apex-legends', color: '#DA292A' },
  { name: 'VALORANT', slug: 'valorant', color: '#FF4655' },
  { name: 'CS2', slug: 'cs2', color: '#DE9B35' },
  { name: 'COD MOBILE', slug: 'cod-mobile', color: '#4CAF50' },
];

export const NEWS_CATEGORIES = {
  team_news: 'Team News',
  tournament_news: 'Tournament News',
  transfer_news: 'Transfer News',
  announcement: 'Announcement',
  community_update: 'Community Update',
};

export const PRODUCT_CATEGORIES = {
  jersey: 'Jerseys',
  hoodie: 'Hoodies',
  cap: 'Caps',
  mousepad: 'Mousepads',
  accessory: 'Accessories',
};

export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

export const formatCurrency = (amount) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);

export const getInitials = (name) =>
  name?.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2) || 'TA';

export const DEMO_STATS = [
  { label: 'Tournaments Won', value: '47+' },
  { label: 'Total Prize Pool', value: '₹2.5 Cr+' },
  { label: 'Active Players', value: '36' },
  { label: 'Years Active', value: '5+' },
];

export const DEMO_NEWS = [
  { _id: '1', title: 'Team Apex Gaming Wins BGIS 2024', slug: 'team-apex-wins-bgis-2024', excerpt: 'Historic victory at the biggest BGMI tournament in India.', category: 'team_news', publishedAt: new Date().toISOString() },
  { _id: '2', title: 'New Valorant Roster Announcement', slug: 'new-valorant-roster', excerpt: 'Meet our revamped Valorant lineup ready to conquer VCT.', category: 'announcement', publishedAt: new Date().toISOString() },
  { _id: '3', title: 'Partnership with HyperX Announced', slug: 'hyperx-partnership', excerpt: 'Team Apex Gaming joins forces with HyperX as official peripherals partner.', category: 'team_news', publishedAt: new Date().toISOString() },
];

export const DEMO_PLAYERS = [
  { 
    _id: '1', 
    ign: 'Jelly', 
    realName: 'JELLY', 
    role: 'IGL', 
    country: 'India', 
    photo: '/assets/IGL.png', 
    slug: 'jelly', 
    game: { name: 'BGMI', slug: 'bgmi' }, 
    statistics: { kd: 4.85, winRate: 74, matchesPlayed: 450 }, 
    isFeatured: true,
    achievements: [
      { date: '2026-04-17', tier: 'C-Tier', tournament: 'Orion Conquest Series', placement: 'Fan Fav. Team', teamLogo: '/assets/IGL.png', prizePool: '$54' },
      { date: '2026-04-17', tier: 'C-Tier', tournament: 'Orion Conquest Series', placement: 'Fan Fav. Player', teamLogo: '/assets/IGL.png', prizePool: '$269' },
      { date: '2024-06-22', tier: 'C-Tier', tournament: 'Battle For Revolution Season 3', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$36' },
      { date: '2024-05-01', tier: 'B-Tier', tournament: 'RA Esports - Champions Gala Season 1', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$120' },
      { date: '2024-04-17', tier: 'B-Tier', tournament: 'OneGame Pro Championship Season 1', placement: 'Most WWCDs', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$60' },
      { date: '2024-04-17', tier: 'B-Tier', tournament: 'OneGame Pro Championship Season 1', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$120' },
      { date: '2024-02-11', tier: 'B-Tier', tournament: 'RA Esports - Rising Star Showdown Season 3', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$50' },
      { date: '2023-06-18', tier: 'B-Tier', tournament: 'Skyesports Champions Series', placement: 'MOST WWCD', teamLogo: 'https://liquipedia.net/commons/images/thumb/6/60/OR_Esports_2021_allmode.png/120px-OR_Esports_2021_allmode.png', prizePool: '$76' }
    ]
  },
  { 
    _id: '2', 
    ign: 'Jonathan', 
    realName: 'Jonathan Amaral', 
    role: 'Assaulter', 
    country: 'India', 
    photo: '/assets/TAG_Jonathan_2026 free man.png', 
    slug: 'jonathan', 
    game: { name: 'BGMI', slug: 'bgmi' }, 
    statistics: { kd: 6.2, winRate: 78, matchesPlayed: 520 }, 
    isFeatured: true,
    awards: [
      { name: 'Top Fragger — PMCO Fall SA', year: 2019 },
      { name: 'MVP — PMWL East', year: 2020 },
      { name: 'MVP — BGIS', year: 2021 },
      { name: 'MVP — Skyesports Championship 5.0', year: 2023 }
    ],
    achievements: [
      { date: '2026-06-21', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Pro Series 2026', placement: 'The Eliminator', teamLogo: '/team_apex_logo-removebg-preview.png', prizePool: '-' },
      { date: '2026-04-17', tier: 'C-Tier', tournament: 'Orion Conquest Series', placement: 'Fan Fav. Team', teamLogo: '/assets/TAG_Jonathan_2026 free man.png', prizePool: '$54' },
      { date: '2026-03-04', tier: 'C-Tier', tournament: 'Weltify Pro Clash Season 2', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$217' },
      { date: '2026-03-04', tier: 'C-Tier', tournament: 'Weltify Pro Clash Season 2', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$43' },
      { date: '2026-02-25', tier: 'C-Tier', tournament: 'Premiership Season One', placement: 'Fan Fav.Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$220' },
      { date: '2026-01-12', tier: 'C-Tier', tournament: 'Blizzard Battlegrounds', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$277' },
      { date: '2025-10-12', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Showdown 2025', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$563' },
      { date: '2025-07-20', tier: 'C-Tier', tournament: 'Clash of Champions Season 2', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$58' },
      { date: '2025-04-27', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Series 2025', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$234' },
      { date: '2025-04-27', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Series 2025', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,171' },
      { date: '2025-04-27', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Series 2025', placement: 'Finals MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,757' },
      { date: '2025-02-02', tier: 'A-Tier', tournament: 'ESL Snapdragon Pro Series Season 6: BGMI', placement: 'Finisher #3', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$116' },
      { date: '2024-06-22', tier: 'C-Tier', tournament: 'Battle For Revolution Season 3', placement: 'Fan Fav. Team', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$36' },
      { date: '2024-05-29', tier: 'B-Tier', tournament: 'RA Esports - Battle For Swaraj Season 1', placement: 'Fan Fav.', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$301' },
      { date: '2024-05-29', tier: 'B-Tier', tournament: 'Upthrust Esports Challengers Showdown Season 2', placement: 'Grand Finals MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$301' },
      { date: '2024-04-17', tier: 'B-Tier', tournament: 'OneGame Pro Championship Season 1', placement: 'Fan Fav. Player', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$598' },
      { date: '2024-01-17', tier: 'B-Tier', tournament: 'Upthrust Esports - The Multiverse Series 2024', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$602' },
      { date: '2023-08-27', tier: 'A-Tier', tournament: 'BGMI Masters Series Season 2', placement: 'W2 Bounty Winnings', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$36' },
      { date: '2023-07-02', tier: 'B-Tier', tournament: 'IQOO Pro Series', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$609' },
      { date: '2022-07-17', tier: 'A-Tier', tournament: 'BGMI Masters Series', placement: 'Finals - MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$627' },
      { date: '2022-03-06', tier: 'B-Tier', tournament: 'VE Winter Masters 2022', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,308' },
      { date: '2022-02-16', tier: 'B-Tier', tournament: 'Skyesports Grand Slam 2022', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,335' },
      { date: '2021-12-01', tier: 'B-Tier', tournament: 'OneShot Showdown Season 2: Grand Finals', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,334' },
      { date: '2021-10-31', tier: 'A-Tier', tournament: 'LOCO War of Glory: Grand Finals', placement: 'MVP #1', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,335' },
      { date: '2021-09-12', tier: 'A-Tier', tournament: 'Skyesports Championship 3.0', placement: 'MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/7/75/GodLike_Esports_2021_allmode.png/120px-GodLike_Esports_2021_allmode.png', prizePool: '$1,360' },
      { date: '2020-08-09', tier: 'S-Tier', tournament: 'PUBG Mobile World League 2020: East', placement: 'Week 3 MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/2/22/TSM_Entity.png/120px-TSM_Entity.png', prizePool: '-' },
      { date: '2020-07-05', tier: 'A-Tier', tournament: 'PUBG Mobile India Series 2020', placement: 'Headshot Expert', teamLogo: 'https://liquipedia.net/commons/images/thumb/2/22/TSM_Entity.png/120px-TSM_Entity.png', prizePool: '$660' },
      { date: '2020-06-14', tier: 'A-Tier', tournament: 'PUBG Mobile Pro League - South Asia Season 1', placement: 'Week 3 MVP', teamLogo: 'https://liquipedia.net/commons/images/thumb/2/22/TSM_Entity.png/120px-TSM_Entity.png', prizePool: '$500' },
      { date: '2019-12-22', tier: 'A-Tier', tournament: 'PUBG Mobile All Stars India 2019', placement: 'Fan Vote', teamLogo: 'https://liquipedia.net/commons/images/thumb/5/53/Entity_Gaming_2019_allmode.png/120px-Entity_Gaming_2019_allmode.png', prizePool: '$703' }
    ]
  },
  { _id: '3', ign: 'Harsh', realName: 'Harsh Rao', role: 'Assaulter', country: 'India', photo: '/assets/tag_harsh  asulter.jpg', slug: 'harsh', game: { name: 'BGMI', slug: 'bgmi' }, statistics: { kd: 4.5, winRate: 70, matchesPlayed: 380 }, isFeatured: true },
  { _id: '4', ign: 'Hydro', realName: 'Hydro Vyas', role: 'Assaulter', country: 'India', photo: '/assets/tag_hydro asulter.jpg', slug: 'hydro', game: { name: 'BGMI', slug: 'bgmi' }, statistics: { kd: 4.3, winRate: 68, matchesPlayed: 410 }, isFeatured: true },
  { _id: '5', ign: 'KioLmao', realName: 'Kio Lmao', role: 'Free Man', country: 'India', photo: '/assets/TAG_KioLmao_2026 free man.png', slug: 'kiolmao', game: { name: 'BGMI', slug: 'bgmi' }, statistics: { kd: 4.6, winRate: 71, matchesPlayed: 390 }, isFeatured: true },
  { _id: '6', ign: 'NeonBlitz', realName: 'Karan Patel', role: 'Duelist', country: 'India', slug: 'neon-blitz', game: { name: 'VALORANT', slug: 'valorant' }, statistics: { kd: 1.35, winRate: 65, matchesPlayed: 200 }, isFeatured: true },
];

export const DEMO_MATCHES = [
  { _id: '1', team1: { name: 'Team Apex Gaming', score: 98 }, team2: { name: 'Team Soul', score: 72 }, status: 'completed', scheduledAt: new Date().toISOString(), round: 'Grand Finals' },
  { _id: '2', team1: { name: 'Team Apex Gaming', score: 0 }, team2: { name: 'GodLike Esports', score: 0 }, status: 'scheduled', scheduledAt: new Date(Date.now() + 86400000).toISOString(), round: 'Semi Finals' },
];

export const DEMO_PRODUCTS = [
  { _id: '1', name: 'Team Apex Jersey', slug: 'tag-jersey', category: 'jersey', price: 2499, comparePrice: 2999, images: ['/assets/tag.jersy.jpg'], isFeatured: true },
  { _id: '2', name: 'Apex Legacy Hoodie', slug: 'legacy-hoodie', category: 'hoodie', price: 3499, images: ['/assets/tag.jersy.jpg'], isFeatured: true },
  { _id: '3', name: 'TAG Gaming Mousepad XL', slug: 'gaming-mousepad', category: 'mousepad', price: 999, images: ['/assets/tag.jersy.jpg'] },
];

export const DEMO_SPONSORS = [
  { _id: '1', name: 'HyperX', tier: 'title', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/HyperX_logo_2021.svg' },
  { _id: '2', name: 'Red Bull', tier: 'gold', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Red_Bull_logo.svg' },
  { _id: '3', name: 'AMD', tier: 'gold', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/AMD_Logo.svg' },
  { _id: '4', name: 'Intel', tier: 'silver', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg' },
  { _id: '5', name: 'Logitech', tier: 'silver', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Logitech_logo.svg' },
  { _id: '6', name: 'Jio', tier: 'bronze', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo_%28October_2015%29.svg' },
];

export const DEMO_ACHIEVEMENTS = [
  { _id: '1', title: 'BGIS 2024 Champion', game: 'bgmi', placement: 'Champion', dateAchieved: '2024-05-15T00:00:00.000Z', image: 'https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=2070', prizePool: '₹2,00,00,000' },
  { _id: '2', title: 'Valorant Conquerors', game: 'valorant', placement: 'Runner-up', dateAchieved: '2024-08-10T00:00:00.000Z', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071', prizePool: '$10,000' },
  { _id: '3', title: 'PMWL 2020 East: Top Fragger (Jonathan)', game: 'bgmi', placement: 'MVP', dateAchieved: '2020-08-09T00:00:00.000Z', image: '/assets/TAG_Jonathan_2026 free man.png', prizePool: '$2,000' },
  { _id: '4', title: 'PMCO Fall 2019 SA: Top Fragger (Jonathan)', game: 'bgmi', placement: 'Top Fragger', dateAchieved: '2019-11-10T00:00:00.000Z', image: '/assets/TAG_Jonathan_2026 free man.png', prizePool: '$500' },
  { _id: '5', title: 'BGIS 2021: Top Fragger (Jonathan)', game: 'bgmi', placement: 'MVP', dateAchieved: '2022-01-16T00:00:00.000Z', image: '/assets/TAG_Jonathan_2026 free man.png', prizePool: '₹1,00,000' },
  { _id: '6', title: 'BMPS 2024: Grand Finals', game: 'bgmi', placement: '#5', dateAchieved: '2024-12-15T00:00:00.000Z', image: 'https://images.unsplash.com/photo-1542652694-40abf526446e?q=80&w=2070', prizePool: '₹25,00,000' }
];
