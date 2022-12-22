const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  name: { type: String },
  product_image: { type: String },
  price: { type: Number },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
});

const productModel = new mongoose.model("product", productsSchema);

module.exports = productModel;
