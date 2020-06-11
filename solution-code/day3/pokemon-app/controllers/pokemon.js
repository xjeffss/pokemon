const pokemon = require('../models/pokemon');

const index = (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const createPokemon = (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
}

const show = (req, res) => {
    res.render('show.ejs', {
        character: pokemon[req.params.index]
    })
}

const deletePokemon = (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
}

const renderEdit = (req, res) => {
    res.render('edit.ejs', {
        character: pokemon[req.params.index],
        characterIndex: req.params.index
    })
}

const updatePokemon = (req, res) => {
    pokemon[req.params.index] = req.body;
    res.redirect('/pokemon');
}

module.exports = {
    updatePokemon,
    renderEdit,
    deletePokemon,
    show,
    createPokemon,
    renderNew,
    index
}