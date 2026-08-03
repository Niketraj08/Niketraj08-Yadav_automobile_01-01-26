# Team Apex Gaming

Premium Indian esports organization platform — inspired by FaZe Clan, TSM, S8UL, and Team Liquid.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js + Vite |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Auth | JWT + Role-Based Access Control |
| Storage | Cloudinary |
| Payments | Razorpay |
| Real-time | Socket.io |

## Features

### Public Website (12 Pages)
- **Home** — Hero, news, matches, rosters, stats, sponsors, merch promo, founder message
- **About** — Story, vision, mission, timeline, achievements, leadership team
- **Rosters** — 6 game categories (BGMI, Free Fire Max, Apex Legends, Valorant, CS2, COD Mobile)
- **Player Profiles** — Stats, achievements, career history, social links, gallery
- **Tournaments** — Upcoming, ongoing, past with standings and results
- **Match Center** — Live scores, schedule, results
- **News & Blog** — Categorized articles with scheduling support
- **Media** — Photos, videos, shorts, highlights
- **Merchandise Store** — Cart, checkout, Razorpay, coupons, order tracking
- **Sponsors** — Partner tiers and details
- **Recruitment** — Player applications with resume/clips upload
- **Contact** — Form, map, social links

### Admin Dashboard
- Role-based access: Super Admin, Manager, Coach, Content Manager
- Modules: Dashboard analytics, players, rosters, tournaments, news, media, store, orders, sponsors, recruitment, users, settings

### Design
- Primary colors: Orange (#FF6B00) + White
- Cyberpunk effects, glassmorphism, 3D hover cards, scroll animations
- Fully responsive, dark mode ready

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

```bash
# Install all dependencies
npm run install:all

# Copy environment files
cp server/.env.example server/.env
cp client/.env.example client/.env

# Seed database (optional)
npm run seed

# Start development (frontend + backend)
npm run dev
```

- **Website:** http://localhost:5173
- **API:** http://localhost:5000/api
- **Admin:** http://localhost:5173/admin/login

### Default Admin Credentials
```
Email: admin@teamapexgaming.com
Password: admin123
```

## Project Structure

```
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # UI, layout components
│   │   ├── pages/          # All 12 public pages + admin
│   │   ├── api/            # Axios API client
│   │   ├── store/          # Zustand state (auth, cart)
│   │   └── styles/         # Global CSS theme
│   └── public/
├── server/                 # Express API
│   └── src/
│       ├── models/         # MongoDB schemas
│       ├── routes/         # API routes
│       ├── controllers/    # Business logic
│       └── middleware/     # Auth, upload, errors
└── package.json            # Root scripts
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Admin login |
| GET | `/api/players` | List players |
| GET | `/api/players/game/:slug` | Players by game |
| GET | `/api/tournaments` | List tournaments |
| GET | `/api/matches/live` | Live matches |
| GET | `/api/news` | Published news |
| POST | `/api/applications` | Submit recruitment |
| POST | `/api/store/orders` | Create order |
| GET | `/api/dashboard/stats` | Admin analytics |

## Deployment

### Frontend (Vercel)
```bash
cd client && npm run build
# Deploy dist/ to Vercel
# Set VITE_API_URL to your production API
```

### Backend (Render / AWS)
```bash
cd server
# Set environment variables from .env.example
npm start
```

## Environment Variables

See `server/.env.example` and `client/.env.example` for all configuration options including MongoDB, JWT, Cloudinary, Razorpay, and Discord webhook.

## License

Proprietary — Team Apex Gaming
