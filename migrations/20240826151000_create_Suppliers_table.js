/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.createTable('suppliers', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('contact_name').nullable();
        table.string('phone').nullable();
        table.string('email').nullable();
        table.string('address').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('suppliers');
};

