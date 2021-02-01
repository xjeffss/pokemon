'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Teams', [
      {
        name: 'Marvel',
      },
      {
        name: 'DC',
      }
     ], {});
  }

  // down: async (queryInterface, Sequelize) => {

  //    await queryInterface.bulkDelete('Teams', null, {});
     
  // }
}
