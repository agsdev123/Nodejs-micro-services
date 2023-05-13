const express = require("express");
const axios = require("axios");

const router = express.Router();

const PRODUCTS_SERVICE_URL = "http://localhost:3001";
const USERS_SERVICE_URL = "http://localhost:3002";
const ORDERS_SERVICE_URL = "http://localhost:3003";

router.get("/products", async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCTS_SERVICE_URL}/products`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/products", async (req, res) => {
  try {
    const response = await axios.post(
      `${PRODUCTS_SERVICE_URL}/products`,
      req.body
    );
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${USERS_SERVICE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/users", async (req, res) => {
  try {
    const response = await axios.post(`${USERS_SERVICE_URL}/users`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const response = await axios.get(`${ORDERS_SERVICE_URL}/orders`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/orders", async (req, res) => {
  try {
    const response = await axios.post(`${ORDERS_SERVICE_URL}/orders`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
