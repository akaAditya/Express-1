const http = require("http");
const express = require("express");
// const route = require("./routes")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><input type='number' name='size'><button type='submit' >Add product</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body); //Output: { title: 'Nike Air', size: '9' }
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello to node js</h1>");
});

app.listen(4000);
