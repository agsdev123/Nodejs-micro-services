const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/productsRoutes');

mongoose.connect('mongodb://localhost/products', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(productsRoutes);

app.listen(3001, () => {
  console.log("Products microservice running on port 3001");
});
