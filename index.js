const express = require("express");
const cors = require("cors");
const app = express();
const api_routes = require("./api");
const web_routes = require("./web");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({"extended":true}))
app.use("/api", api_routes);
app.use(web_routes);

app.listen(3000,() => {
  console.log("Up and running on port 3000");
})