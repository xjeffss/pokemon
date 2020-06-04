const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const pokemon = require('./models/pokemon');

app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

//index
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        pokemon: pokemon
    })
})

app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/pokemon', (req, res) => {
    pokemon.push(req.body);
    res.redirect('/pokemon');
})

//show
app.get('/pokemon/:index', (req, res) => {
    console.log(req.params.index);
    res.render('show.ejs', {
        character: pokemon[req.params.index]
    })
})

app.delete('/pokemon/:index', (req, res) => {
    pokemon.splice(req.params.index, 1);
    res.redirect('/pokemon');
})

app.get('/pokemon/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        character: pokemon[req.params.index],
        characterIndex: req.params.index
    })
})

app.put('/pokemon/:index', (req, res) => {
    pokemon[req.params.index] = req.body;
    res.redirect('/pokemon');
})

app.listen(3000);