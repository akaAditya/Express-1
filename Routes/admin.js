const express = require('express');

const router = express.Router();

router.use("/add-product", (req, res, next) => {
    res.send(
      "<form action='/admin/product' method='POST'><input type='text' name='title'><input type='number' name='size'><button type='submit' >Add product</button></form>"
    );
  });
  
router.post("/product", (req, res, next) => {
console.log(req.body); //Output: { title: 'Nike Air', size: '9' }
res.redirect("/");
});

module.exports = router;