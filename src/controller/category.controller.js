const { logError } = require("../config/service");
const categoryService = require('../services/categoryService');

const getAll = async (req, res) => {
  try {
    const { categories, roles } = await categoryService.getAllData();
    res.json({
      list: categories,
      role: roles,
    });
  } catch (err) {
    logError('category.getAll', err, res);
  }
};

const create = async (req, res) => {
  try {
    const data = await categoryService.createCategory(req.body);
    res.json({
      data: data,
    });
  } catch (err) {
    logError('category.create', err, res);
  }
};

const update = async (req, res) => {
  try {
    const data = await categoryService.updateCategory(req.body);
    res.json({
      data: data,
    });
  } catch (err) {
    logError('category.update', err, res);
  }
};

const remove = async (req, res) => {
  try {
    const data = await categoryService.deleteCategory(req.body.id);
    res.json({
      message: "Delete successfully!",
      data: data,
    });
  } catch (err) {
    logError('category.remove', err, res);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
