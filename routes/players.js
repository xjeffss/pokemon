const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.players.playerIndex);
router.post('/signup', ctrl.players.postPlayer);
router.get('/signup', ctrl.players.playerSignup);
router.get('/login', ctrl.players.loginPlayer);
router.post('/login', ctrl.players.login);
router.get('/profile', ctrl.players.playerProfile);
router.get('/profile/:index', ctrl.players.profile);
router.get('/profile/:index/edit', ctrl.players.playerEdit)

module.exports = router;