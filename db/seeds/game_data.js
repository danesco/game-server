exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game_data').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('game_data').insert({id: 1, score: 5500, money: 4550, pop_points: 1250, level: 'level 2', active: true, user_id: 2}),
        knex('game_data').insert({id: 2, score: 1500, money: 5350, pop_points: 5310, level: 'level 2', active: false, user_id: 3}),
        knex('game_data').insert({id: 3, score: 9500, money: 4250, pop_points: 4050, level: 'level 2', active: true, user_id: 1})
      ]);
    });
};
