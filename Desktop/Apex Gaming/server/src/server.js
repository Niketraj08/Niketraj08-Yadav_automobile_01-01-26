require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const http = require('http');
const { Server } = require('socket.io');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

connectDB();

const app = express();
const server = http.createServer(app);

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:5175'
].filter(Boolean);

const io = new Server(server, {
  cors: { origin: allowedOrigins, credentials: true },
});

app.set('io', io);

io.on('connection', (socket) => {
  socket.on('join-match', (matchId) => socket.join(`match-${matchId}`));
  socket.on('disconnect', () => {});
});

app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));

app.get('/api/health', (req, res) => res.json({ success: true, message: 'Team Apex Gaming API' }));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/games', require('./routes/games'));
app.use('/api/players', require('./routes/players'));
app.use('/api/tournaments', require('./routes/tournaments'));
app.use('/api/matches', require('./routes/matches'));
app.use('/api/news', require('./routes/news'));
app.use('/api/media', require('./routes/miscRoutes').media);
app.use('/api/store', require('./routes/store'));
app.use('/api/sponsors', require('./routes/miscRoutes').sponsors);
app.use('/api/applications', require('./routes/applications'));
app.use('/api/team-members', require('./routes/miscRoutes').teamMembers);
app.use('/api/achievements', require('./routes/miscRoutes').achievements);
app.use('/api/dashboard', require('./routes/dashboard'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Trigger nodemon restart - 3
module.exports = { app, io };
