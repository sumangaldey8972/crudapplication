const express = require("express");
const categoryModel = require("../models/category.models");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    let allCategory = await categoryModel.find();
    res.send({ message: "data fethc Successfull", data: allCategory });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Server error while adding to the database" });
  }
});

app.post("/", async (req, res) => {
  try {
    let data = await categoryModel.create(req.body);
    res.status(200).send({ message: "data added successfull", data: data });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Server error while adding to the database" });
  }
});

module.exports = app;
