'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Players', [
       {
      
        name: 'Dick Gracin',
        username: 'Robin',
        password: 'layanegg',
        teamId: 2
    },
    {
      
      name: 'Barry Stevens',
      username: 'Flash',
      password: 'zippy',
      teamId: 2
  },
  {
      
   name: 'Bruce Wayne',
   username: 'Batman',
   password: 'hasgadgets',
   teamId: 2
},

{
      
   name: 'Tony Stark',
   username: 'Ironman',
   password: 'prettyawesome',
   teamId: 1
}
     ], {});

  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('Players', null, {});

  }
};
