const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const VendorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [2, "Name must be at least 2 characters."],
      maxLength: [30, "Name is to large"],
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [30, "Name is to large"],
    },
    email: {
      type: String,
      unique: [true, "Email must be unique"],
      trim: true,
      required: [true, "Email address is required"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    confirmPassword: {},
    contactNumber: {
      type: String,
      required: [true, "Please provide your Contact Number"],
    },
    emergencyPhoneNum: {
      type: String,
    },
    about: {
      type: String,
    },

    companyName: {
      type: String,
    },

    businessLisence: {
      type: String,
    },

    status: {
      type: String,
      default: "inactive",
      enum: ["active", "inactive", "blocked"],
    },
    contactNumber: {
      type: String,
      required: [true, "Please provide your Contact Number"],
    },
    profilePicture: String,
    coverPicture: String,
    about: {
      type: String,
    },
    nidCard: {
      type: String,
      required: [true, "NID Card must be required"],
    },
  },
  { timestams: true }
);

VendorSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

const Vendor = mongoose.model("Vendors", VendorSchema);

module.exports = Vendor;
