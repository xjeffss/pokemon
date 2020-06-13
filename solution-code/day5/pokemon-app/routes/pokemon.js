const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//index
router.get('/', ctrl.pokemon.index);
router.get('/new', ctrl.pokemon.renderNew);
router.post('/', ctrl.pokemon.createPokemon);
router.get('/:index', ctrl.pokemon.show);
router.delete('/:index', ctrl.pokemon.deletePokemon);
router.get('/:index/edit', ctrl.pokemon.renderEdit);
router.put('/:index', ctrl.pokemon.updatePokemon);

module.exports = router