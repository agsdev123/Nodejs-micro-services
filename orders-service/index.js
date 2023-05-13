const express = require("express");
const mongoose = require("mongoose");
const ordersRoutes = require("./routes/ordersRoutes");

mongoose.connect("mongodb://localhost/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(ordersRoutes);

app.listen(3003, () => {
  console.log("Orders microservice running on port 3003");
});
