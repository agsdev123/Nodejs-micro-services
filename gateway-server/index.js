const express = require("express");
const gatewayRoutes = require("./routes/gatewayRoutes");

const app = express();
app.use(express.json());
app.use(gatewayRoutes);

app.listen(3000, () => {
  console.log("Gateway server running on port 3000");
});
