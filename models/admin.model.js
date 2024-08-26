const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const AdminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your Email"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide your password"],
    },
    role: {
      type: String,
      enum: ["admin", "suparadmin"],
      default: "admin",
    },
    profilePic: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
