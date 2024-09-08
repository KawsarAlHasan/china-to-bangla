const Product = require("../models/product.model");

// create Product
exports.createProduct = async (req, res, next) => {
  try {
    // Extracting uploaded images information from req.files
    const imagePaths = req.files.map((file) => ({
      image_url:
        "https://china-to-bangla.onrender.com/public/images/" + file.filename,
      is_primary: false,
    }));

    // If you want to set the first image as primary, you can do this:
    if (imagePaths.length > 0) {
      imagePaths[0].is_primary = true;
    }

    // Combine the req.body data with the images array
    const productData = {
      ...req.body,
      images: imagePaths,
    };

    // Create the product with the combined data
    // const result = await Product.create(productData);

    res.status(200).json({
      status: "Success",
      message: "Product created Successfully",
      // data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product creation Unsuccessful",
      error: error.message,
    });
  }
};

// get all Products
exports.getAllProducts = async (req, res, next) => {
  try {
    //{price:{$gt:3000}}

    let filters = { ...req.query };

    const excludeFields = ["sort", "page", "limit"];
    excludeFields.forEach((field) => delete filters[field]);

    let filtersSrting = JSON.stringify(filters);
    filtersSrting = filtersSrting.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );

    filters = JSON.parse(filtersSrting);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.page) {
      const { page = 1, limit = 2 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await Product.find(filters)
      .skip(queries.skip)
      .limit(queries.limit)
      .sort(queries.sortBy);
    const totalProducts = await Product.countDocuments(filters);
    const pageCount = Math.ceil(totalProducts / queries.limit);
    res.status(200).json({
      status: "Success",
      totalProducts,
      pageCount,
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all products",
      error: error.message,
    });
  }
};

// get single Product
exports.getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Product.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the product",
      error: error.message,
    });
  }
};

// Product update
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    const result = await product.set(req.body).save();
    res.status(200).json({
      status: "Success",
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product updated unseccess",
      error: error.message,
    });
  }
};

// Product delete
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Product.deleteOne({ _id: id });
    res.status(200).json({
      status: "Success",
      message: "Product Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      message: "Product Delete Unsuccess",
      error: error.message,
    });
  }
};
