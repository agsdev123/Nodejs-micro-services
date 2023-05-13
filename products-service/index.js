const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/productsRoutes');

mongoose.connect(
  "mongodb+srv://agsdev123:9502404512@products.0wxzlnj.mongodb.net/",
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
app.use(productsRoutes);

app.listen(3001, () => {
  console.log("Products microservice running on port 3001");
});
