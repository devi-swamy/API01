const express = require("express");
const api = require("./api/api");

const app = express.Router();
//create a GET REQUEST HANDLER
app.get("/", (req, res) => {
  res.json("Hello devi");
});

app.use("/api", api);
module.exports = app;
