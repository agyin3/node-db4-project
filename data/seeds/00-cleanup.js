const cleaner = require('knex-cleaner')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignore_tables: ['knex_migrations', 'knex_migrations_lock'] // don't empty migration tables
  })
};
