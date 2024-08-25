const categoryModel = require('../models/categoryModel');

const getAllData = async () => {
    const [categories] = await categoryModel.getAllCategories();
    const [roles] = await categoryModel.getAllRoles();
    return { categories, roles };
};

const createCategory = async (body) => {
    const categoryData = {
        name: body.name,
        description: body.description,
        parent_id: body.parent_id,
        status: body.status,
    };
    const [data] = await categoryModel.createCategory(categoryData);
    return data;
};

const updateCategory = async (body) => {
    const categoryData = {
        name: body.name,
        description: body.description,
        parent_id: body.parent_id,
        status: body.status,
        id: body.id,
    };
    const [data] = await categoryModel.updateCategory(categoryData);
    return data;
};

const deleteCategory = async (id) => {
    const [data] = await categoryModel.deleteCategory(id);
    return data;
};

module.exports = {
    getAllData,
    createCategory,
    updateCategory,
    deleteCategory
};