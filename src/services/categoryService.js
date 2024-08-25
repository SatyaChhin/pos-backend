const categoryModel = require('../models/categoryModel');

const getAllData = async () => {
    const [categories] = await categoryModel.getAllCategories();
    const [roles] = await categoryModel.getAllRoles();
    return { categories, roles };
};

module.exports = {
    getAllData,
};