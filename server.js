//Include Express JS
const express = require("express");

//Let create a new express Instance like object
const app = express();
//create a GET REQUEST HANDLER

app.get("/", (req, res) => {
  res.json("Hello devi");
});

app.get("/:name", (req, res) => {
  console.log(req.query);
  res.json("Hey now the url is having the param  " + req.params.name + " !!");
});

//listen it in a particular port
const port = 3000;
app.listen(port, () => {
  console.log("server started with port 3000");
});

module.exports = express;
