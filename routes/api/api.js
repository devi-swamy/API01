const express = require("express");
const app = express.Router();
//create a GET REQUEST HANDLER
app.get("/", (req, res) => {
  res.json("Hello devi from api");
});

app.get("/new", (req, res) => {
  res.json("please use the post request");
});

app.post("/new", (req, res) => {
  console.log(req.body);
  res.json("welcome");
});
module.exports = app;
