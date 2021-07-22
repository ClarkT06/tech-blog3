const { Comment } = require('../models');

const commentData = [{
        comment_text: "Welcome to the Page",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Prince is the Greatest Artist Ever!",
        user_id: 2,
        post_id: 2
    },
  
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;