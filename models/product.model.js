const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please provide a name for this product"],
      // trim: true,
      // minLength: [3, "Product name must be at least 3 characters."],
      // maxLength: [255, "Product name is too large"],
    },
    // url_slug: {
    //   type: String,
    //   // required: true,
    //   unique: true,
    //   trim: true,
    // },
    // cat_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Category",
    //   required: true,
    // },
    // sub_cat_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "SubCategory",
    //   required: true,
    // },
    description: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      // required: [true, "Please provide a price for this product"],
      // min: [0, "Price can't be negative"],
    },
    // stock_quantity: {
    //   type: Number,
    //   // required: true,
    //   min: [0, "Stock quantity can't be negative"],
    // },
    // status: {
    //   type: String,
    //   enum: ["active", "inactive", "deleted"],
    //   default: "active",
    // },
    // visibility: {
    //   type: String,
    //   enum: ["public", "private", "featured"],
    //   default: "public",
    // },
    // attributes: [
    //   {
    //     color: String,
    //     size: String,
    //   },
    // ],
    images: [
      {
        image_url: String,
        is_primary: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
