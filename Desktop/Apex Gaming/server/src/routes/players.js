const express = require('express');
const { protect, authorize } = require('../middleware/auth');
const createCrudController = require('../controllers/crudController');
const playerCtrl = require('../controllers/playerController');
const Player = require('../models/Player');

const router = express.Router();
const crud = createCrudController(Player, { populate: 'game', slugField: 'ign' });

router.get('/', crud.getAll);
router.get('/game/:gameSlug', playerCtrl.getPlayersByGame);
router.get('/slug/:slug', crud.getBySlug);
router.get('/:id', crud.getOne);

router.post('/', protect, authorize('super_admin', 'manager', 'coach'), playerCtrl.createPlayer);
router.put('/:id', protect, authorize('super_admin', 'manager', 'coach'), crud.update);
router.put('/:id/transfer', protect, authorize('super_admin', 'manager'), playerCtrl.transferPlayer);
router.post('/:id/upload', protect, authorize('super_admin', 'manager', 'coach'), require('../middleware/upload').single('file'), playerCtrl.uploadPlayerImage);
router.delete('/:id', protect, authorize('super_admin', 'manager'), crud.remove);

module.exports = router;
