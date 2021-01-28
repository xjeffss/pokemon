const Player = require('../models').Player;

const playerIndex = (req, res) => {
    Player.findAll ()
    .then(Player => {
        res.render('players/index.ejs', {
        player: Player
    })
 
    });
}

const postPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => {
    res.redirect(`/players/profile/${newPlayer.id}`)
    })

}

const playerSignup = (req, res) => {
    Player.create(req.body)
    .then()
    res.render('players/signup.ejs')
}

const playerProfile = (req, res) => {
    Player.findByPk(req.params.index, {
        include: [{
            model: Player,
            attributes: ['id', 'name']
        }]
    })
    .then(playerProfile=> {
        res.render('players/profile.ejs', {
        players: playerProfile[req.params.index],
        index: req.params.index
    })
    })
}

const playerEdit = (req, res)=> {
    Player.findByPk(req.params.index)
    .then(player => {
        	res.render('players/edit.ejs', 
		{ 	players: player[req.params.index], //the fruit object
			index: req.params.index 
    })
	}
	);
};

const profile = (req, res) => {
    Player.findByPk(req.params.index, {
        include: [{
            model: Player,
            attributes: ['id', 'name']
        }]
    })
    .then(playerProfile => {
        res.render('players/profile.ejs', {
        players: playerProfile[req.params.index],
       })

    })
}
const loginPlayer = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundPlayer=> {
        res.redirect(`players.login.ejs`);
    })
}


const login = (req, res) => {
    let index = players.findIndex(
      players => (req.body.username === players.username
        && req.body.password === players.password)
       );   res.redirect(`/players/profile/${index}`);
    }
const deletePlayer = (req, res) => {
       Player.destroy({
           where: {
               id:req.params.index}
            })
            .then(() => {
                 res.redirect('players/index.ejs')
            })
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