const {
  getList,
  getOne,
  create,
  createMultiple,
  update,
  remove,
} = require("../controller/role.controller");
const { validateCheck } = require("../config/service");
const { body } = require("express-validator");
const validateData = () => {
  return [body("name").notEmpty().withMessage("Please fill in role name!")];
};
const role = (app) => {
  app.get("/api/role", getList);
  app.get("/api/role/:id", getOne); // params localhost:8081/api/category/5
  app.post("/api/role", validateData(), validateCheck, create);
  app.post("/api/role/create_multiple", createMultiple);
  app.put("/api/role", validateData(), validateCheck, update);
  app.delete("/api/role", remove);
};
module.exports = { role };
