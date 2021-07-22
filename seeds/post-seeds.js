  
const { Post } = require('../models');

const postData = [{
        title: 'Diamonds and Pearls is an Amazing Song',
        content: 'Diamonds and Pearls is the title track to Prince and The New Power Generation\'s 1991 album. The song is an upbeat ballad, given a rock edge with guitar and heavy drumming. The song also features the vocals of NPG member Rosie Gaines. The ballad is an expression of love and not lust, as is the theme on some of the other singles from the album. The song was a top 10 hit, reaching number 3 in the US and the top spot on the R&B chart.',
        user_id: 1

    },
    {
        title: 'Billie Jean is an Amazing song',
        content: 'Billie Jean is a song by American singer Michael Jackson, released by Epic Records on January 2, 1983, as the second single from Jackson\'s sixth studio album, Thriller (1982). It was written and composed by Jackson and produced by Jackson and Quincy Jones',
         user_id: 2
    },
  
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;