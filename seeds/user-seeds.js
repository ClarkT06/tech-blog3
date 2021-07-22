const { User } = require('../models');

const userData = [{
        email: 'prince@test.com',
        password: 'password'

    },
    {
        email: 'michael@test.com',
        password: 'password'
    },
  
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;