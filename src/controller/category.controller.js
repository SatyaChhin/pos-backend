const { db } = require("../config/db");
const { logError } = require("../config/service");

const getAll = async (req, res) => {
  try {
    const [data] = await db.query("SELECT * FROM category");
    const [role] = await db.query("SELECT * FROM role");
    res.json({
      list: data,
      role: role,
    });
  } catch (err) {
    logError("category.getAll", err, res);
  }
};

const create = async (req, res) => {
  try {
    var sql =
      "INSERT INTO category (name,description,parent_id,status) VALUES (:name,:description,:parent_id,:status)";
    var param = {
      name: req.body.name, // req.body == get data json type from client
      description: req.body.description,
      parent_id: req.body.parent_id,
      status: req.body.sataus,
    };
    const [data] = await db.query(sql, param);
    res.json({
      data: data,
    });
  } catch (err) {
    logError("category.create", err, res);
  }
};

const update = async (req, res) => {
  try {
    var sql =
      "UPDATE category SET name=:name, description=:description, parent_id=:parent_id, status=:status WHERE id=:id";
    var param = {
      name: req.body.name,
      description: req.body.description,
      parent_id: req.body.parent_id,
      status: req.body.status,
      id: req.body.id,
    };
    const [data] = await db.query(sql, param);
    res.json({
      data: data,
    });
  } catch (err) {
    logError("category.update", err, res);
  }
};

const remove = async (req, res) => {
  try {
    var sql = "DELETE FROM category WHERE id=:id";
    var param = {
      id: req.body.id,
    };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Delete successfully!",
      data: data,
    });
  } catch (err) {
    logError("category.remove", err, res);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
