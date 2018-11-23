
exports.up = function(knex, Promise) {
  return knex.schema.table('game_data', (game_data) => {
    game_data.integer('user_id');
    game_data.foreign('user_id')
    .references('users.id')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('game_data', (game_data) => {
    game_data.dropColumn('user_id');
  })
};
