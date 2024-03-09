const path = require('path');
const express = require('express');
const pathName = require('../utils/path');

const router = express.Router();
router.use('/contact', (req, res, next)=>{
    res.sendFile(path.join(pathName, 'views', 'contact.html'))
})

router.post('/success', (req, res, next)=>{
    res.sendFile(path.join(pathName, 'views', 'success.html'))
})

module.exports = router;