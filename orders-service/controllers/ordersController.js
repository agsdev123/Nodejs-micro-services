const Order = require("../models/orderModel");
const axios = require("axios");
const Product = require("../../products-service/models/productModel");
const User = require("../../users-service/models/userModel");
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    const populatedOrders = await Promise.all(
      orders.map(async (order) => {
        const productPromise = axios.get(
          `http://localhost:3001/products/${order.product}`
        );
        const userPromise = axios.get(
          `http://localhost:3002/users/${order.user}`
        );

        const [productResponse, userResponse] = await Promise.all([
          productPromise,
          userPromise,
        ]);

        const populatedOrder = {
          _id: order._id,
          product: productResponse.data,
          user: userResponse.data,
          quantity: order.quantity,
          __v: order.__v,
        };

        return populatedOrder;
      })
    );

    console.log("orders", populatedOrders);
    res.json(populatedOrders);
  } catch (error) {
    console.log("error", error);
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
