'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PlayerPokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER
        
      },
      pokemonId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    },
    {
      uniqueKeys: {
          actions_unique: {
              fields: ['playerId', 'pokemonId']
          }
        }
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PlayerPokemons');
  }
};