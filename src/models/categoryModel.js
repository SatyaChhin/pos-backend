const { db } = require('../config/db');

const getAllCategories = async () => {
    return await db.query(
        `SELECT * 
        FROM category`
    );
};

const getAllRoles = async () => {
    return await db.query(
        `SELECT * 
        FROM role`
    );
};

const createCategory = async (categoryData) => {
    const sql = `
        INSERT INTO category (name, description, parent_id, status) 
        VALUES (:name, :description, :parent_id, :status)
    `;
    return await db.query(sql, categoryData);
};

const updateCategory = async (categoryData) => {
    const sql = `
        UPDATE category 
        SET name=:name, description=:description, parent_id=:parent_id, status=:status 
        WHERE id=:id
    `;
    return await db.query(sql, categoryData);
};

const deleteCategory = async (categoryId) => {
    const sql = `
        DELETE FROM category 
        WHERE id=:id
    `;
    return await db.query(sql, { id: categoryId });
};

module.exports = {
    getAllCategories,
    getAllRoles,
    createCategory,
    updateCategory,
    deleteCategory
};