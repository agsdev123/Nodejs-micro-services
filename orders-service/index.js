const express = require("express");
const mongoose = require("mongoose");
const ordersRoutes = require("./routes/ordersRoutes");


mongoose.connect(
  "mongodb+srv://agsdev123:9502404512@orders.1p9l2bg.mongodb.net/",
  {
    // Connecting to the MongoDB database
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected!");
});

const app = express();
app.use(express.json());
app.use(ordersRoutes);

app.listen(3003, () => {
  console.log("Orders microservice running on port 3003");
});
