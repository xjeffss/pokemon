const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.player.index);
router.get('/signup', ctrl.player.renderSignup);
router.post('/', ctrl.player.signup);
router.get('/profile/:index', ctrl.player.renderProfile);
router.get('/login', ctrl.player.renderLogin);
router.post('/login', ctrl.player.login);
router.put('/profile/:index', ctrl.player.editProfile);
router.delete('/:index', ctrl.player.deletePlayer);


module.exports = router;