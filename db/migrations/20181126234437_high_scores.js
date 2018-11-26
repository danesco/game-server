exports.up = function(knex, Promise) {
  return knex.schema.createTable('high_scores', function (table) {
    table.increments();
    table.string('name');
    table.integer('scores');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
