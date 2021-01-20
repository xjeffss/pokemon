const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.pokemon.index);

router.delete('/:index', ctrl.pokemon.deletePoke);

router.get('/:index', ctrl.pokemon.showPoke);

router.get('/:index/edit', ctrl.pokemon.editPoke);

router.post('/:index/edit', ctrl.pokemon.addPoke);


module.exports = router;


