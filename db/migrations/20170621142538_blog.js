
exports.up = function(knex, Promise) {

  return Promise.all([

       knex.schema.createTable('projects', function(table) {
            table.increments('id').primary();
            table.string('project_name');
            table.string('languages');
            table.string('pictures_URL');
            table.string('description')
        })

    ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('projects')
    ])

};
