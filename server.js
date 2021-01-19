const express = require('express'); //from documentation: express is function
const app = express();//app is an object
const methodOveride = require('method-override');

app.use(express.urlencoded( {extended: true}));

app.use(methodOveride('_method'))

const pokemon = [
    {
      name: "Bulbasaur",
      img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"
    },
    {
      name: "Ivysaur",
      img: "http://img.pokemondb.net/artwork/ivysaur.jpg"
    },
    {
      name: "Venusaur",
      img: "http://img.pokemondb.net/artwork/venusaur.jpg"
    },
    {
      name: "Charmander",
      img: "http://img.pokemondb.net/artwork/charmander.jpg"
    },
    {
      name: "Charizard",
      img: "http://img.pokemondb.net/artwork/charizard.jpg"
    },
    {
      name: "Squirtle",
      img: "http://img.pokemondb.net/artwork/squirtle.jpg"
    },
    {
      name: "Wartortle",
      img: "http://img.pokemondb.net/artwork/wartortle.jpg"
    }
  ];

app.get('/pokemon/', (req, res) => {
    res.render("index.ejs", {
        poke:pokemon
    });
})  

app.post("/pokemon/:index/edit", (req, res) => {
    pokemon.push(req.body)
    res.redirect('/pokemon/')
})

app.delete("/pokemon/:index", (req, res) => {
    pokemon.splice(req.params.index, 1)
    res.redirect('/pokemon/')
})

app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        poke: pokemon[req.params.index],
        index: req.params.index
    })
}
)


//show route
app.get('/pokemon/:index', (req, res) => {
    res.render('show.ejs', {
        poke:pokemon[req.params.index],
    }); 
});

  app.listen(3000, ()=>{
    console.log("I am listening");
});
    