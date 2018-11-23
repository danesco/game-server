
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('game_data', (table) => {
      table.increments();
      table.integer('score');
      table.integer('money');
      table.integer('pop_points');
      table.string('level');
      table.boolean('active');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('game_data')
  ])
};
