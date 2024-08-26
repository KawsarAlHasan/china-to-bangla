const mongoose = require("mongoose");

const SubcriptionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this Subcription"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      enum: {
        values: ["Monthly", "Quarterly", "Yearly"],
      },
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this Subcription"],
      min: [0, "Price can't be negative"],
    },
  },
  { timestams: true }
);

const Subcription = mongoose.model("Subcriptions", SubcriptionSchema);
module.exports = Subcription;
