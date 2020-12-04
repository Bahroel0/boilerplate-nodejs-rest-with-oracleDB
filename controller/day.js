const DB = require("../config/db/oracle");
const DayRepository = require("../repository/day");
const Constant = require("../helper/constant");
const { body, param, validationResult } = require("express-validator");

module.exports = {
  validate: (method) => {
    switch (method) {
      case "create":
        return [body("name").notEmpty()];
      case "update":
        return [body("id").notEmpty().isNumeric(), body("name").notEmpty()];
      case "delete":
        return [param("id").isNumeric().notEmpty()];
    }
  },
  list: async (req, res) => {
    const conn = await DB.getConnection();
    const result = await DayRepository.findAll(conn);
    DB.closeConnection(conn);
    return res.status(200).json(result);
  },
  create: async (req, res) => {
    const { name } = { ...req.body };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json({ success: false, message: Constant.INVALID_PARAMETER });
    }

    const conn = await DB.getConnection();
    const result = await DayRepository.insert(conn, name);
    DB.closeConnection(conn);
    return res.status(result ? 201 : 200).json({
      success: result ? true : false,
      message: result ? Constant.SAVE_DATA_SUCCESS : Constant.SAVE_DATA_FAILED,
    });
  },
  update: async (req, res) => {
    const { id, name } = { ...req.body };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json({ success: false, message: Constant.INVALID_PARAMETER });
    }

    const conn = await DB.getConnection();
    const result = await DayRepository.update(conn, id, name);
    DB.closeConnection(conn);
    return res.status(200).json({
      success: result ? true : false,
      message: result
        ? Constant.UPDATE_DATA_SUCCESS
        : Constant.UPDATE_DATA_FAILED,
    });
  },
  delete: async (req, res) => {
    const id = req.params.id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json({ success: false, message: Constant.INVALID_PARAMETER });
    }

    const conn = await DB.getConnection();
    const result = await DayRepository.delete(conn, parseInt(id));
    DB.closeConnection(conn);
    return res.status(200).json({
      success: result ? true : false,
      message: result
        ? Constant.DELETE_DATA_SUCCESS
        : Constant.DELETE_DATA_FAILED,
    });
  },
};
