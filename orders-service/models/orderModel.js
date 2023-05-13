const mongoose = require("mongoose");
const Product = require("../../products-service/models/productModel");
const User = require("../../users-service/models/userModel");
const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  quantity: Number,
});

module.exports = mongoose.model("Order", orderSchema);
