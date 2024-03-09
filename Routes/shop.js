const path = require('path');
const pathName = require('../utils/path')
const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(pathName, 'views', 'shop.html'));
  });

module.exports = router;