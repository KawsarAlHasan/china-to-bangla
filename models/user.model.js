const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
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
      trim: true,
      required: [true, "Email address is required"],
      lowercase: true,
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    confirmPassword: {},
    contactNumber: {},

    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive", "blocked"],
    },
    profilePicture: String,
    coverPicture: String,
    about: String,
    address: String,
    country: String,
    reletionship: String,
  },
  { timestams: true }
);

UserSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
