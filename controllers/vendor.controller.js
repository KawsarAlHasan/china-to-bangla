const Vendor = require("../models/vendor.model");

// vendor create
exports.createVendor = async (req, res, next) => {
  try {
    const result = await Vendor.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Vendor create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Vendor create Unseccess",
      error: error.message,
    });
  }
};

// get all vendor
exports.getAllVendors = async (req, res, next) => {
  try {
    const result = await Vendor.find({});
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all vendors",
      error: error.message,
    });
  }
};

// get single vendor
exports.getSingleVendor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Vendor.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the Vendor",
      error: error.message,
    });
  }
};

// delete vendor
exports.deleteVendor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Vendor.deleteOne({ _id: id });
    res.status(200).json({
      status: "Success",
      message: "Vendor Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Vendor Deleted Unseccess",
      error: error.message,
    });
  }
};

exports.updateVendor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await Vendor.findById(id);
    const result = await event.set(req.body).save();
    res.status(200).json({
      status: "Success",
      message: "Vendor Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Vendor Updated Unseccess",
      error: error.message,
    });
  }
};
