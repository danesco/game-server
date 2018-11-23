exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_data').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('game_data').insert({id: 1, score: 500, money: 450, pop_points: 50, level: 'level 2', active: true, user_id: 2}),
        knex('game_data').insert({id: 2, score: 700, money: 550, pop_points: 150, level: 'level 3', active: false, user_id: 3}),
        knex('game_data').insert({id: 3, score: 200, money: 100, pop_points: 100, level: 'level 1', active: true, user_id: 1})
      ]);
    });
};
