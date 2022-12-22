const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./db/db");
const categoryRouter = require("./routes/category.routes");
const productRouter = require("./routes/product.routes");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/category", categoryRouter);
app.use("/product", productRouter);

app.get("/", (req, res) => {
  res.send("welcome to SYMLINK TECHNOLOGIES");
});

app.listen(PORT, async () => {
  await connect();
  console.log(`server started at ${PORT}`);
});
