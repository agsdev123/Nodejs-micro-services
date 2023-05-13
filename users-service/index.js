const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/usersRoutes");

mongoose.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());
app.use(usersRoutes);

app.listen(3002, () => {
  console.log("Users microservice running on port 3002");
});
