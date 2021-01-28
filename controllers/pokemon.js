const Pokemon = require('../models').Pokemon;

const index = (req, res) => {
    Pokemon.findAll()
    .then(Pokemon => {
           res.render("index.ejs", {
        pokemon: Pokemon
    }); 
    })
}

const addPoke = (req, res) => {
    Pokemon.create(req.body)
    .then(newPokemon => {
         res.redirect(`/pokemon/${newPokemon}`);
    })
}

const deletePoke = (req, res) => {
    Pokemon.destroy({ where: { id:req.params.index } })
    .then(() => {
        res.redirect('/pokemon')
    })

}

const editPoke = (req, res) => {
    Pokemon.findByPk(req.params.index)
    .then(pokemon=> {
        res.render('edit.ejs', {
        poke: pokemon[req.params.index],
        index: req.params.index,
    });
    }
    )
}

const showPoke = (req, res) => {
    Pokemon.findByPk(req.params.index)
        .then(pokemon => {
          res.render('show.ejs', {
        poke:pokemon,
    })
})
    }; 

module.exports = {
    index,
    addPoke,
    editPoke,
    deletePoke,
    showPoke

};