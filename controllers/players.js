const Player = require('../models').Player;
const Team = require('../models').Team;
const Pokemon = require('../models').Pokemon;


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
    res.redirect(`profile/${newPlayer.id}`)
    })

}

const playerSignup = (req, res) => {
    res.render('players/signup.ejs')
}

// const playerProfile = (req, res) => {
//     Player.findByPk(req.params.index)
//     .then(playerProfile => {
//         res.render('players/profile.ejs', {
//         players: playerProfile[req.params.index],
//        })

//     })
// }

const playerEdit = (req, res)=> {
    console.log(req.body)
    Player.update(req.body,{
        where: { 
            id: req.params.index
        },
        returning: true
        })
        .then(editPlayer => {
            Pokemon.findByPk(req.body.pokemon)
            .then(choosePokemon =>{
                Player.findByPk(req.params.index)
                .then(chosenPlayer => {
                    chosenPlayer.addPokemon(choosePokemon);
                    // console.log(Pokemon.name)
                res.redirect(`/players/profile/${req.params.index}`)
                })
            })
        	; 
    })
    }

const profile = (req, res) => {

    Player.findByPk(req.params.index, {
        include: [Pokemon, {
            
            model: Team,
            attributes:['id', 'name']
        }] 
    })
    .then(playerProfile => {
        console.log(Pokemon.name)
        Team.findAll().then(teamProfile => {
            Pokemon.findAll().then(allPokemon => {
            res.render('players/profile.ejs', {
            pokemon: allPokemon,
            players: playerProfile,
            teams: teamProfile
          })
        })
    })
}) 
}
const loginPlayer = (req, res) => {
  res.render('players/login.ejs')
    }



const login = (req, res) => {
    Player.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundPlayer=> { 
        res.redirect(`profile/${foundPlayer.id}`);
    })
}
const deletePlayer = (req, res) => {
    Player.destroy({
           where: {
               id:req.params.index}
            })
            .then(() => {
                 res.redirect('/players'); 
                 console.log("hello)")
            })
    }

module.exports = {
    postPlayer,
    playerIndex,
    playerSignup,
    playerEdit,
    profile,
    loginPlayer,
    login,
    deletePlayer


};