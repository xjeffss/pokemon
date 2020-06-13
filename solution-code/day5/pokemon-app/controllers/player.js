const player = require('../player');

const Player = require('../models').Player;

const index = (req, res) => {
    res.render('player/index.ejs')
}

const renderSignup = (req, res) => {
    res.render('player/signup.ejs')
}

const signup = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => {
        res.redirect(`/player/profile/${newPlayer.id}`);
    })
}

const renderLogin = (req, res) => {
    res.render('player/login.ejs')
}

const login = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundPlayer => {
        res.redirect(`/player/profile/${foundPlayer.id}`);
    })
}

const renderProfile = (req, res) => {
    Player.findByPk(req.params.index)
    .then(foundPlayer => {
        res.render('player/profile.ejs', {
            player: foundPlayer
        })
    })
}

const editProfile = (req, res) => {
    Player.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedPlayer => {
        res.redirect(`/player/profile/${req.params.index}`);
    })   
}

const deletePlayer = (req, res) => {
    Player.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/player');
    })
}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,
    renderProfile,
    editProfile,
    deletePlayer
}