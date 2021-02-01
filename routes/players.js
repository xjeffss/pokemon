const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.players.playerIndex);
router.post('/signup', ctrl.players.postPlayer);
router.get('/signup', ctrl.players.playerSignup);
router.get('/login', ctrl.players.loginPlayer);
router.post('/login', ctrl.players.login);
router.delete('/profile/:index', ctrl.players.deletePlayer);
router.get('/profile/:index', ctrl.players.profile);

router.put('/profile/:index', ctrl.players.playerEdit)


module.exports = router;