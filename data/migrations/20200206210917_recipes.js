
exports.up = function(knex) {
  return knex.schema.createTable('ingredients', tbl => {
      tbl.increments()
      tbl.string('name')
        .notNullable()
        .unique()
  })
  .createTable('recipes', tbl => {
      tbl.increments()
      tbl.string('name')
        .notNullable()
  })
  .createTable('recipeIngedients', tbl => {
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.decimal('quantity')
        .notNullable()
      tbl.string('measurement')
        .notNullable()
      tbl.primary(['recipes', 'ingredients'])
  })
  .createTable('instructions', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('instruction_num')
        .notNullable()
        .unsigned()
      tbl.string('instruction')
        .notNullable()    
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipeIngredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};
