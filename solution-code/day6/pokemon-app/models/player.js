'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    Player.belongsTo(models.Team, { foreignKey: 'teamId' })
    Player.belongsToMany(models.Pokemon, {
      through: 'PlayerPokemon',
      foreignKey: 'playerId',
      otherKey: 'pokemonId'
    });
  };
  return Player;
};