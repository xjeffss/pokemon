'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Players', [
       {
      
        name: 'Dork Player',
        username: 'dork1',
        password: 'dork1pw'
    }

     ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Players', null, {});

  }
};
