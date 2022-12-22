const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: { type: String, enum: ["men", "kids", "women"] },
});

const categoryModel = new mongoose.model("category", categorySchema);

module.exports = categoryModel;
