const { db } = require('../config/db');
const getAllCategories = async () => {
    return await db.query("SELECT * FROM category");
};

const getAllRoles = async () => {
    return await db.query("SELECT * FROM role");
};

module.exports = {
    getAllCategories,
    getAllRoles,
};