const express = require("express");
const productModel = require("../models/product.models");
const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allProducts = await productModel.find().populate("categoryId");
    res
      .status(200)
      .send({ message: "data fetch successfull", data: allProducts });
  } catch (err) {
    res
      .status(500)
      .send({ message: "server error while fetching products data" });
  }
});

app.post("/", async (req, res) => {
  try {
    let newData = await productModel.create(req.body);
    res.status(200).send({ message: "data added successfull", data: newData });
  } catch (err) {
    res
      .status(500)
      .send({ message: "server error while adding product in the database" });
  }
});

app.put("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let newProduct = req.body;
    let product = await productModel.updateOne(
      { _id: id },
      { $set: newProduct }
    );
    res.status(200).send({ message: "data edited successfull", data: product });
  } catch (err) {
    res.status(500).send({
      message: "server error while editing product in the database",
    });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "deleted Successfull", data: product });
  } catch (err) {
    res.status(500).send({
      message: "server error while deleting the product in the database",
    });
  }
});

module.exports = app;
