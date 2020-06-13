'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokemons', [
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
    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
