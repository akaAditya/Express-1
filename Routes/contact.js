const path = require('path');
const express = require('express');
const contactControllers = require('../controllers/contactControl')
const router = express.Router();

router.use('/contact', contactControllers.getContactDetails)

router.post('/success', contactControllers.getSuccessPage)

module.exports = router;