const { getAll, create, update, remove } = require("../controller/category.controller");
const { validateCheck } = require("../config/service");
const { body } = require("express-validator");

const validateData = () => {
  return [body("name").notEmpty().withMessage("Please fill in name!")];
};

const category = (app) => {
  app.get("/api/category", getAll);
  app.post("/api/category", validateData(), validateCheck, create);
  app.put("/api/category", validateData(), validateCheck, update);
  app.delete("/api/category", remove);
};

module.exports = {
  category,
};
