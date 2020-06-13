const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

app.use('/pokemon', routes.pokemon);
app.use('/player', routes.player);

app.listen(3000);