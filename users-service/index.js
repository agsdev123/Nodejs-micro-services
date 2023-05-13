const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/usersRoutes");

mongoose.connect(
  "mongodb+srv://agsdev123:9502404512@users.rw2n9oj.mongodb.net/",
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
app.use(usersRoutes);

app.listen(3002, () => {
  console.log("Users microservice running on port 3002");
});
