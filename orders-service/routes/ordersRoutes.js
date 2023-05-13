const express = require("express");
const ordersController = require("../controllers/ordersController");

const router = express.Router();

router.get("/orders", ordersController.getOrders);
router.post("/orders", ordersController.createOrder);

module.exports = router;
