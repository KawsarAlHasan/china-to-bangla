const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/token");

// user create
exports.createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "User create Successfully",
      data: {
        user: result,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "User create Unseccess",
      error: error.message,
    });
  }
};

// get all users
exports.getAllUsers = async (req, res, next) => {
  try {
    const result = await User.find({});
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all events",
      error: error.message,
    });
  }
};

// get single user
exports.getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await User.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the event",
      error: error.message,
    });
  }
};

// user login
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "Fail",
        error: "Please provide your credentials",
      });
    }

    const userEmail = await User.findOne({ email });
    if (!userEmail) {
      return res.status(401).json({
        status: "Fail",
        error: "Email and Password is not correct",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, userEmail.password);
    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Email and Password is not correct",
      });
    }

    const token = generateToken(userEmail);

    const { password: pwd, ...others } = userEmail.toObject();
    res.status(200).json({
      status: "Success",
      message: "Successfully logged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(403).json({
      status: "Fail",
      message: "User login unsuccess",
      error: error.message,
    });
  }
};

// user delete
exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const { decoded } = req?.decoded?.email;
  const findUserByToken = await User.findOne({ decoded });
  const userId = findUserByToken._id.toHexString();

  if (id == userId) {
    try {
      const result = await User.deleteOne({ _id: id });
      res.status(200).json({
        status: "Success",
        message: "User Deleted Successfully",
        data: result,
      });
    } catch (error) {
      res.status(200).json({
        status: "Fail",
        message: "User Delete Unsuccess",
        error: error.message,
      });
    }
  } else {
    res.status(403).json({
      status: "Fail",
      message: "Access Denied! You can only delete your own profile",
    });
  }
};

// user update
exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { decoded } = req?.decoded?.email;
  const findUserByToken = await User.findOne({ decoded });
  const userId = findUserByToken._id.toHexString();
  console.log(id, userId);
  if (id == userId) {
    try {
      const user = await User.findById(id);
      const result = await user.set(req.body).save();
      res.status(200).json({
        status: "Success",
        message: "User Updated Successfully",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "Fail",
        message: "User updated unseccess",
        error: error.message,
      });
    }
  } else {
    res.status(403).json({
      status: "Fail",
      message: "Access Denied! You can only update your own profile",
    });
  }
};

// get me
exports.getMe = async (req, res, next) => {
  try {
    const { decoded } = req?.decoded?.email;
    const user = await User.findOne({ decoded });
    res.status(200).json({
      status: "Success",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      error: error.message,
    });
  }
};
