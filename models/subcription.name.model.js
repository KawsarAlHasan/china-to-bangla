const mongoose = require("mongoose");
const SubcriptionNameSchema = mongoose.Schema(
  {
    subcriptionName: {
      type: String,
      required: [true, "Please provide a Subcription Type"],
      trim: true,
      unique: [true, "Subcription Type must be unique"],
    },
  },
  { timestams: true }
);

const SubcriptionNames = mongoose.model(
  "SubcriptionNames",
  SubcriptionNameSchema
);
module.exports = SubcriptionNames;
