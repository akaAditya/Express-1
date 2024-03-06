const http = require("http");
const express = require("express");
// const route = require("./routes")

const app = express();

app.use((req, res, next) => {
  console.log("My first middleware");
  next();
});

app.use((req, res, next) => {
    res.send('<h1>hello to node js</h1>');
  });

// app.use((req, res, next) => {
//   res.send({ key1: 'value' });
// });

app.listen(4000);
