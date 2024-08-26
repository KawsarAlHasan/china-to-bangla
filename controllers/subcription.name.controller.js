const SubcriptionNames = require("../models/subcription.name.model");

// create Subcription Name
exports.createSubcriptionName = async (req, res, next) => {
  try {
    const result = await SubcriptionNames.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Subcription Name create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Subcription Name create Unseccess",
      error: error.message,
    });
  }
};

// get all Subcription Name
exports.getAllSubcriptionsName = async (req, res, next) => {
  try {
    const result = await SubcriptionNames.find({});
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all Subcriptions Name",
      error: error.message,
    });
  }
};

// get single Subcription Name
exports.getOneSubcriptionName = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubcriptionNames.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the Subcription Name",
      error: error.message,
    });
  }
};

// Subcription Name update
exports.updateSubcriptionName = async (req, res, next) => {
  try {
    const { id } = req.params;
    const subcriptionName = await SubcriptionNames.findById(id);
    const result = await subcriptionName.set(req.body).save();
    res.status(200).json({
      status: "Success",
      message: "Subcription Name Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Subcription Name updated unseccess",
      error: error.message,
    });
  }
};

// Subcription delete
exports.deleteSubcriptionName = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await SubcriptionNames.deleteOne({ _id: id });
    res.status(200).json({
      status: "Success",
      message: "Subcription Name Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      message: "Subcription Name Delete Unsuccess",
      error: error.message,
    });
  }
};
