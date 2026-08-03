const Player = require('../models/Player');
const Game = require('../models/Game');
const { uploadToCloudinary } = require('../utils/helpers');
const { slugify } = require('../utils/helpers');

exports.getPlayersByGame = async (req, res, next) => {
  try {
    const game = await Game.findOne({ slug: req.params.gameSlug });
    if (!game) return res.status(404).json({ success: false, message: 'Game not found' });
    const players = await Player.find({ game: game._id, isActive: true }).populate('game');
    res.json({ success: true, data: players, game });
  } catch (error) {
    next(error);
  }
};

exports.transferPlayer = async (req, res, next) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ success: false, message: 'Player not found' });
    const { gameId } = req.body;
    player.game = gameId;
    await player.save();
    res.json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

exports.uploadPlayerImage = async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded' });
    const result = await uploadToCloudinary(req.file.buffer, 'players');
    const field = req.body.field || 'photo';
    const player = await Player.findByIdAndUpdate(req.params.id, { [field]: result.secure_url }, { new: true });
    res.json({ success: true, data: player, url: result.secure_url });
  } catch (error) {
    next(error);
  }
};

exports.createPlayer = async (req, res, next) => {
  try {
    const body = { ...req.body };
    if (body.ign) body.slug = slugify(body.ign);
    const player = await Player.create(body);
    res.status(201).json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};
