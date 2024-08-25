const { db } = require("../config/db");
const { logError } = require("../config/service");
const getList = async (req, res) => {
  try {
    var sql = "SELECT * FROM role";
    const [data] = await db.query(sql);
    res.json({
      list: data,
    });
  } catch (err) {
    logError("role.getList", err, res);
  }
};

const getOne = async (req, res) => {
  try {
    var sql = "SELECT * FROM role WHERE id=:param_id";
    var param = {
      param_id: req.params.id,
    };
    const [data] = await db.query(sql, param);
    res.json({
      list: data,
    });
  } catch (err) {
    logError("role.getOne", err, res);
  }
};

const create = async (req, res) => {
  try {
    var sql =
      "INSERT INTO role (name, code, status) VALUES (:name, :code, :status)";
    var param = {
      name: req.body.name,
      code: req.body.code,
      status: req.body.status,
    };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Insert successfully!",
      data: data,
    });
  } catch (err) {
    logError("role.create", err, res);
  }
};

const createMultiple = async (req, res) => {
  try {
    var sql = "INSERT INTO role (name, code, status) VALUES :arrRecord";
    var param = {
      arrRecord: req.body.arr_role,
    };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Insert " + req.body.arr_role.length + " records  successfully!",
      data: data,
    });
  } catch (err) {
    logError("role.create", err, res);
  }
};

const update = async (req, res) => {
  try {
    var sql =
      "UPDATE role SET name=:name, code=:code, status=:status WHERE id=:id";
    var param = {
      id: req.body.id,
      name: req.body.name,
      code: req.body.code,
      status: req.body.status,
    };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Update successfully!",
      data: data,
    });
  } catch (err) {
    logError("role.update", err, res);
  }
};
const remove = async (req, res) => {
  try {
    var sql = "DELETE FROM role WHERE id=:id";
    var param = {
      id: req.body.id,
    };
    const [data] = await db.query(sql, param);
    res.json({
      message: "Delete successfully!",
      data: data,
    });
  } catch (err) {
    logError("role.remove", err, res);
  }
};

module.exports = {
  getList,
  getOne,
  create,
  createMultiple,
  update,
  remove,
};
