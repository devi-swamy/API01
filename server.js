//Include Express JS
const express = require("express");
//import Root route handler
const root = require("./routes/root");

//Let create a new express Instance like object
const app = express();
const port = 3000;
//middlewares
app.use(express.json());
//Route a handler
app.use("/", root);

app.get("/:name", (req, res) => {
  console.log(req.query);
  res.json("Hey now the url is having the param  " + req.params.name + " !!");
});

//listen it in a particular port

app.listen(port, () => {
  console.log("server started with port 3000");
});

module.exports = express;
