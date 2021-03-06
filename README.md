![GA Logo](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# POKE EXPRESS

Make a Pokemon app that displays data inside server-side rendered views.

## App

Create a full CRUD app on Pokemon.


## Day 1

### Set up your server

- Create an express app called `pokemon-app` that listens on port 3000. Ensure that you have installed the necessary npm packages to run an express server and render templates. You can refer back to old code and lessons, but try to recall the necessary steps before checking in old code. Be ok with making mistakes!

<hr>
 &#x1F534; The commit message should read: <br>
 "Commit 1 - My server is set up and running"
<hr>


### Set up your _'database'_

- Create a file called `server.js`
- Inside of this file,
	- Import express library
	- Run the app on port `3000`
	- Add the following array of pokemon objects.

This will be your database for this week.

```javascript
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

```
<!--- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`-->

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Connected my database, can see json in the browser"
<hr>

### Create GET Routes

- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser.
- create another get route `/pokemon/:index` that will return only one pokemon on that index. For example, `/pokemon/0` should display the 0 indexed pokemon.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - added GET APIs"
<hr>

## Day 2

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve an `index.ejs` file that displays a list of all the pokemon. Put the pokemon inside a `<ul>` with class name `pokemon`. Use a `for` loop to display all pokemon.

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 4 - index.ejs view rendered at pokemon route"
<hr>


### Set up your show route

- Inside your `server.js`, use already created get route `/pokemon/:index`
- Update the API such that it serves a template called `show.ejs` which displays the information of a specific pokemon according to their index in the pokemon array.
- You may want to look up how to access route parameters in express.

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 5 - show view shows pokemon details "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
 - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
 - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 6 - added dynamic anchor tags to index.ejs "
<hr>


### Complete CRUD functionality

Set up routes and templates to allow for full CRUD functionality.

- Users should be able to insert a new pokemon into the array using a form on a `new.ejs` page. Creation should be handled via a POST route to the `/pokemon` route.
- Users should be able to edit an individual pokemon on an `edit.ejs` page accessed from the  `/pokemon/:index/edit` route. The updating should be handled via a POST request to the `/pokemon/:index` route.
- Users should be able to delete a pokemon using a button provided on the show and index pages.

### Bonus

**Stretch step, not required**

Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.

Choose a google font and add it to your html and inside your `<style>` tag


## Day 3

Today you will add controller and router to the existing pokemon app to make it MVC compliant.

### Create Controller

- Create `controllers` folder to the app
- Add `index.js` and `pokemon.js` to it
- Import and export the necessary files, folders and/or libraries

### Create Router
- Create `routes` folder in the app
- Add `index.js` and `pokemon.js` to it
- Import and export the necessary files, folders and/or libraries.

### Refactor `server.js`
- Refactor `server.js` and move all the APIs into the controller and routes.
- Use Express middleware to call the router
- Remove all the APIs once above is done.

### Bonus
**Stretch step, not required**

- Continue to style your app
- Add another field like `type` to each pokemon, along with `name` and `img`
- After the `type` field is added, create an API to give user an option to get all pokemon objects by `type`.
- Add edit and delete options on Pokemon Show page instead of homepage.
- While editing pokemon, give user an option to upload an image instead of editing a link to it.


## Day 4

Today we added `User` model to our fruit app and just like that you now have to add `Player` model to this app.

These are few required functionality that must be implemented for a player.

- Add Signup and Login functionality.
- Show Player's profile after signup and login
- Player can edit own profile
- A player can also delete itself

### Bonus
- Style all the new views you have added for the `Player` model
- Make you app user friendly by adding links to navigate back and forth to other pages.
- Refactor your code such that instead of having separate forms for create and edit of pokemon, you can do it using same view/html form for both.
- If you added the `type` field in Day3's bonus challenge, instead of manually typing it, have a User select the type using a dropdown, in both create and edit page.
- Add password hashing during signup. Read about what it is. The external library you can use to implement that is `bcryptjs`.
- If you do successfully hash the password during signup then make sure during login you are using `compare()` to compare the hashed password with password string.


Lastly, let your imagination run, see what more you can do with this app. Own it!!

## Day 5

So far you have the app with the static data but you don't have a database yet to persist it in the database. Just like today, you will persist `pokemon` model into the Postgres database.

1. Make sure to install the libraries locally in the `pokemon-app`,

	```
	npm install sequelize
	npm install pg
	```
2. After that run `sequelize init` in `pokemon-app` to create the desired folders.
3. Add required configuration in `config/config.json`

	```
	{
	  "development": {
	    "database": "pokemon_dev",
	    "host": "127.0.0.1",
	    "dialect": "postgres",
	    "operatorsAliases": false
	  }
	}
	```
4. Create database by running `createdb pokemon_dev`
5. Make sure to move any file other than `index.js` out of the `models` folder. The only file present in `models` folder should be `index.js`. Update the import paths of the files moved out of `index.js` in `controllers` folder.

### Create Pokemon Model

5. Generate `Pokemon` model using Sequelize CLI `model:generate` command and create all the fields you need with it.
6. Update the generated migrations file such that both `createdAt` and `updatedAt` fields have default values.

	```
	createdAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    }
	```
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Pokemon`, `sequelize seed:generate --name demo-pokemon`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed:all`
11. Confirm in the database,

	```
	psql pokemon_dev
	\dt
	SELECT * FROM "Pokemons";
	```
12. Import `Pokemon` model in the `controllers/pokemon.js`

	```
	const Pokemon = require('../models').Pokemon;
	```
13. Now, update all the controller functions one by one with the `Pokemon` model. Be sure to test the app after each API is updated. You may have to update your views wherever needed with `pokemon.id` instead of using `index`.

### Create Player Model

5. Generate `Player` model using Sequelize CLI `model:generate` command and create all the fields you need with it.
6. Update the generated migration file such that both `createdAt` and `updatedAt` fields have default values. Also, put `unique & not null` constraints on `username` and just `not null` constraint on `password`.
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Player`, `sequelize seed:generate --name demo-player`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed --seed <xxxxxxxxx-demo-player.js>`
11. Confirm is psql,

	```
	psql pokemon_dev
	\dt
	SELECT * FROM "Players";
	```
12. Import `Player` model in the `controllers/player.js`

	```
	const Player = require('../models').Player;
	```
13. Now, update all the controller functions one by one with the `Player` model. Be sure to test the app after each API is updated. You may have to update your views wherever needed with `player.id` instead of using the `index`.




## Day 6

## Part 1

Today you will work on building associations between different models. So far you have a `Pokemon` and `Player` model.

### Create Team Model

Let's create a new model `Team` first. The only field `Team` will have is `name` which will be a string.
 
5. Generate `Team ` model using Sequelize CLI `model:generate` command and create `name` field which will be a string.
6. Update the generated migrations file such that both `createdAt` and `updatedAt` fields have default values. Also, make `name` not null.

	```
	name: {
       type: Sequelize.STRING,
       allowNull: false
    },
	createdAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
      	defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
    }
	```
7. Run the migrations `sequelize db:migrate`
8. Generate database seed file for `Team`, `sequelize seed:generate --name demo-team`
9. Fill the created empty seeders file by adding `bulkInsert` on objects.
10. Seed the database table by running `sequelize db:seed --seed <xxxxxxxxx-demo-team.js>`
11. Confirm in psql,

	```
	psql pokemon_dev
	\dt
	SELECT * FROM "Teams";
	```
### Add teamId to Player

Now that `Team` model has been created we can go ahead and add `teamId` column to `Players` table.

1. Create a migration file to add `teamId` to the `Players` table.

	```bash
		sequelize migration:generate --name add-teamId-to-players
	```
2. Inside the newly created migration file, add code to add the column to the table.
3. Run `sequelize db:migrate` to run the new migration file.
4. In the `models/player.js`, make sure to add the new column so that our app knows about it.
5. Reseed the `seeders/<TIMESTAMP>-demo-player.js` with a some team ids. Make sure the teamIds you use exist in the `Teams` table.

```
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Players', [
      {
        name:'Tony Stark',
        username: 'ironman',
        password: 'prettyawesome',
        teamId: 1
      },
      {
        name:'Clark Kent',
        username: 'superman',
        password: `canfly`,
        teamId: 2
      },
      {
        name:'Bruce Wayne',
        username: 'batman',
        password: 'hasgadgets',
        teamId: 3
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    	return queryInterface.bulkDelete('Players', null, {});
  }
};
```
	
6. Once the above changes our made, undo player seeded date `sequelize db:seed:undo --seed 20200608030632-demo-player.js`
7. After this, run `sequelize db:seed --seed xxxxxxxxx-demo-player.js` to reseed the `Players` data.


### hasMany Association

Now, you will build the association between `Team` and `Player`. A team can have multiple players whereas a Player can be part of one team. Team has one-to-many relationship with Player.

That means, **Team hasMany Players** and each **Player belongsTo one Team**. 

1. In the `models/player.js` file, add the association for a `Player.belongsTo(models.Team)`.
	
	```
	static associate(models) {
    	Player.belongsTo(models.Team, { foreignKey: 'teamId' })
  	};
	```
2. In the `models/team.js` file, add the association for an `Team.hasMany(models.Player)`.

	```
	static associate(models) {
    	Team.hasMany(models.Player, { foreignKey: 'teamId' })
  	};
	```
	
### Update Player Controller & View

1. `include: [Team]` in the Player to access team detail from the Player object.
2. `findAll()` teams in the controller which renders `profile.ejs` to display all teams in a dropdown on Player profile page for the player to select the team and edit the profile.

![](./images/edit-player.png)

### Bonus

- Create a router and a controller for `Team` model.
- Create APIs to perform CRUD on the `Team` model.
- Create a view for the `Team` to list all the teams.
- Create a show page for a team that also lists all the players currently added to that team.
- As always keep styling all the new views added to the app.

## Part 2

### Create Join Table

Each `Player` can catch multiple pokemons and each `Pokemon` can be caught by multiple players. That means `Player` **has many-to-many relationship** with `Pokemon`.

1. Generate model for the join table, `sequelize model:create --name PlayerPokemon --attributes playerId:integer,pokemonId:integer`
2. Update the migration file, add `not null` constraint to `playerId` and `pokemonId` columns. Also add `unique` constraint on the combination of these 2 columns such that no player can add the same pokemon more than once.
3. Run the migration `sequelize db:migrate`
4. Update the `Pokemon` and `Player` models to add `belongsToMany` association. Make sure to give the right `foreignKey` and `otherKey` in both models.
5. On Pokemon show page, list all the players that have added the Pokemon.
6. On Player profile, list all the Pokemons the player has already added.
5. Give player an option during profile edit to add a pokemon using a dropdown. 

### Bonus

- Add another view to show a list of teams, players added to each team, and pokemon added to each limit. Let your imagination run, style this view, use a tree to represent this data, whatever comes to your fancy.
- Give player an option to remove a pokemon.
- Refactor the dropdown to add a pokemon with an option of adding/removing multiple pokemons by a player. Think about using checkboxes or multiple select in a dropdown or any other way you want to implement.
- Allow a player to create a team, keep track of the player by adding a new column `playerId` in `Team` model.
- The player who creates a team is already added to that team.
- Lastly, keep making your app look more and more awesome by styling it.
