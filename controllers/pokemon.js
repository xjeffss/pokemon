const pokemon = require('../models/pokemon.js')

const index = (req, res) => {
    res.render("index.ejs", {
        pokemon:pokemon
    });
}

const addPoke = (req, res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon/')
}

const deletePoke = (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.redirect('/pokemon/')
}

const editPoke = (req, res) => {
    res.render('edit.ejs', {
        poke: pokemon[req.params.index],
        index: req.params.index
    })
}

const showPoke = (req, res) => {
    res.render('show.ejs', {
        poke:pokemon[req.params.index],
    }); 
};
module.exports = {
    index,
    addPoke,
    editPoke,
    deletePoke,
    showPoke

};