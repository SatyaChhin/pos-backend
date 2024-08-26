/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.table('categories', function(table) {
      table.string('status').defaultTo('active'); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('categories', function(table) {
      table.dropColumn('status');
    });
  };
  
