# AstraCognix Solutions Website

React + Tailwind single-page experience paired with an Express backend for inquiry handling and SQLite persistence.

## Project Structure
- `frontend/`: React (Vite), Tailwind CSS, react-router, Swiper carousel.
- `backend/`: Express API, SQLite storage, Nodemailer for admin alerts.

## Getting Started
1) Install dependencies  
```
cd "AstraCognix Solution Pvt. Ltd. (Website)/backend" && npm install
cd ../frontend && npm install
```

2) Configure environment  
- Copy `backend/env.example` to `backend/env` and adjust values (ports, SMTP, allowed origin, DB path).

3) Run locally  
- Backend: `cd backend && npm run dev` (default http://localhost:5000)  
- Frontend: `cd frontend && npm run dev` (default http://localhost:5173)  
Ensure `CLIENT_ORIGIN` in `env` matches the frontend URL.

## API
- `POST /api/contact`
  - Body: `{ name, email, phone?, company?, description }`
  - Persists to SQLite table `inquiries` and sends an email if SMTP is configured.
- `GET /api/health` for uptime checks.

## Content Updates
- Edit `frontend/src/data/siteContent.js` for services, stats, testimonials, portfolio items, and tech stack.
- Hero/sections: `frontend/src/components/*.jsx`.
- Branding assets: replace `frontend/public/logo.svg` and update colors in `frontend/tailwind.config.js`.

## Production Build
- Frontend: `cd frontend && npm run build` → outputs to `dist/`.
- Backend: `npm run start` (ensure `env` is set). Serve `frontend/dist` via a static host (e.g., Nginx) and proxy `/api` to the backend.

## Deployment Notes
- Set `NODE_ENV=production`.
- Configure SMTP credentials for notifications.
- Back up `backend/data/contact.db` if using the default SQLite path.
- Add HTTPS and WAF/rate-limiting at the edge; keep CORS restricted to your domain.

