/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function(knex) {
    return knex.schema.dropTableIfExists('products')
      .then(function() {
        return knex.schema.createTable('products', function(table) {
          table.increments('id').primary();
          table.string('sku').unique().notNullable();
          table.string('name_kh').notNullable();
          table.string('name_en').notNullable();
          table.text('description').nullable();
          table.decimal('price', 10, 2).notNullable();
          table.integer('stock').unsigned().notNullable();
          table.integer('category_id').unsigned().nullable();
          table.integer('supplier_id').unsigned().nullable();
          table.string('barcode').unique().nullable();
          table.string('unit').notNullable();
          table.boolean('is_active').defaultTo(true);
          table.dateTime('expiry_date').nullable();
          table.boolean('is_taxable').defaultTo(true);
          table.string('image_url').nullable();
          table.decimal('discount', 5, 2).nullable();
          table.timestamps(true, true);
        });
      });
  };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products');
  };
  


