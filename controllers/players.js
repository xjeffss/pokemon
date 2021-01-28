const players = require('../../../players');

const playerIndex = (req, res) => {
    res.render('players/index.ejs', {
        players: players
    });
}

const postPlayer = (req, res) => {
    players.push(req.body);
    res.redirect(`/players/profile/${players.length-1}`)
}

const playerSignup = (req, res) => {
    res.render('players/signup.ejs')
}
const playerProfile = (req, res) => {
    res.render('players/profile.ejs', {
        players: players[req.params.index],
        index: req.params.index
    })
}

const playerEdit = (req, res)=> {
	res.render('players/edit.ejs', 
		{ 	players: players[req.params.index], //the fruit object
			index: req.params.index //... and its index in the array
		}
	);
};

const profile = (req, res) => {
    res.render('players/profile.ejs', {
    players: players[req.params.index],
    index: req.params.index
    })
}
const loginPlayer = (req, res) => {
    res.render('players/login.ejs')
}

const login = (req, res) => {
    let index = players.findIndex(
      players => (req.body.username === players.username
        && req.body.password === players.password)
       );   res.redirect(`/players/profile/${index}`);
    }
const deletePlayer = (req, res) => {
       players.splice(req.params.index, 1)
        res.redirect('players/index.ejs')
    }

module.exports = {
    postPlayer,
    playerIndex,
    playerSignup,
    playerProfile,
    playerEdit,
    profile,
    loginPlayer,
    login,
    deletePlayer


};