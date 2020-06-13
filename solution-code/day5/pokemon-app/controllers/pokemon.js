const Pokemon = require('../models').Pokemon;

const index = (req, res) => {
    Pokemon.findAll()
    .then(allPokemon => {
        res.render('index.ejs', {
            pokemon: allPokemon
        })
    })
}

const renderNew = (req, res) => {
    res.render('new.ejs');
}

const createPokemon = (req, res) => {
    Pokemon.create(req.body)
    .then(newPokemon => {
        res.redirect('/pokemon');
    })
}

const show = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(foundPokemon => {
        res.render('show.ejs', {
            character: foundPokemon
        })
    })
}

const deletePokemon = (req, res) => {
    Pokemon.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/pokemon');
    })
}

const renderEdit = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(foundPokemon => {
        res.render('edit.ejs', {
            character: foundPokemon
        })
    })
}

const updatePokemon = (req, res) => {
    Pokemon.update(req.body, {
        where: {id:req.params.index},
        returning: true
    })
    .then(updatedPokemon => {
        res.redirect('/pokemon');
    })
    
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