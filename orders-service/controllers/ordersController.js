const Order = require("../models/orderModel");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("product").populate("user");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { productId, userId, quantity } = req.body;
    const order = new Order({ product: productId, user: userId, quantity });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
