'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokemon = sequelize.define('Pokemon', {
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Pokemon.associate = function(models) {
    Pokemon.belongsToMany(models.Player, {
      through: 'PlayerPokemon',
      foreignKey: 'pokemonId',
      otherKey: 'playerId'
    });
  };
  return Pokemon;
};