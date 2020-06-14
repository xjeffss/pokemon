'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlayerPokemon = sequelize.define('PlayerPokemon', {
    playerId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {});
  PlayerPokemon.associate = function(models) {
    // associations can be defined here
  };
  return PlayerPokemon;
};