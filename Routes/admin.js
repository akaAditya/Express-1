const path = require("path");
const pathName = require('../utils/path')
const express = require("express");
const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.sendFile(path.join(pathName, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body); //Output: { title: 'Nike Air', size: '9' }
  res.redirect("/");
});

module.exports = router;
