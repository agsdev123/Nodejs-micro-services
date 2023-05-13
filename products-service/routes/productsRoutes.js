const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/products", productsController.getProducts);
router.post("/products", productsController.createProduct);

module.exports = router;
