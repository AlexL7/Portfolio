exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('projects').insert(
            {id: 1,
            project_name: "Bee Network",
            languages: "HTML;CSS;NodeJS;Express",
            pictures_URL: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Anthidium_February_2008-1.jpg;https://www.teambonding.com/wp-content/uploads/2012/10/bees-in-the-hive.jpg",
            description: "Website about bees;Social platform where people can connect and communciate over there passion of bees and honey."
            }),

        knex('projects').insert(
            {id: 2,
            project_name: "Gem Stone",
            languages: "Ruby on Rails",
            pictures_URL: "https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.ruby.png",
            description: "First Ruby App: Build an app where you can collect and archive precious stones you have collected"
            }),

        knex('projects').insert(
        {id: 3,
         project_name: 'Snakes & More Snakes',
         languages: "Python",
         pictures_URL: "http://www.ecanadanow.com/wp-content/uploads/2015/07/giant-python-florida1.jpg",
         description: "Geography of Snakes;Interactive map to see where different snakes are from in different parts of the world"
         })
      ]);
    });
};
