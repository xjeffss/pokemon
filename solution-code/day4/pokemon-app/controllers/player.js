const player = require('../models/player')

const index = (req, res) => {
    res.render('player/index.ejs')
}

const renderSignup = (req, res) => {
    res.render('player/signup.ejs')
}

const signup = (req, res) => {
    player.push(req.body);
    res.redirect(`/player/profile/${player.length-1}`);
}

const renderLogin = (req, res) => {
    res.render('player/login.ejs')
}

const login = (req, res) => {
    let index = player.findIndex(
        player => (player.username === req.body.username && 
                    player.password === req.body.password)
    )

    res.redirect(`/player/profile/${index}`);
}

const renderProfile = (req, res) => {
    res.render('player/profile.ejs', {
        player: player[req.params.index],
        index: req.params.index
    })
}

const editProfile = (req, res) => {
    player[req.params.index] = req.body;
    res.redirect(`/player/profile/${req.params.index}`);
}

const deletePlayer = (req, res) => {
    player.splice(req.params.index, 1);
    res.redirect('/player');
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