const Subcription = require("../models/subcription.model");

// create Subcription
exports.createSubcription = async (req, res, next) => {
  try {
    const result = await Subcription.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Subcription create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Subcription create Unseccess",
      error: error.message,
    });
  }
};

// get all Subcription
exports.getAllSubcriptions = async (req, res, next) => {
  try {
    const result = await Subcription.find({});
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all Subcriptions",
      error: error.message,
    });
  }
};

// get single Subcription
exports.getOneSubcription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Subcription.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the Subcription",
      error: error.message,
    });
  }
};

// Subcription update
exports.updateSubcription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subcription = await Subcription.findById(id);
    const result = await subcription.set(req.body).save();
    res.status(200).json({
      status: "Success",
      message: "Subcription Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Subcription updated unseccess",
      error: error.message,
    });
  }
};

// Subcription delete
exports.deleteSubcription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Subcription.deleteOne({ _id: id });
    res.status(200).json({
      status: "Success",
      message: "Subcription Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      message: "Subcription Delete Unsuccess",
      error: error.message,
    });
  }
};
