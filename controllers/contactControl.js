const path = require('path');
const pathName = require('../utils/path');

exports.getContactDetails = (req, res, next)=>{
    res.sendFile(path.join(pathName, 'views', 'contact.html'))
}

exports.getSuccessPage = (req, res, next)=>{
    res.sendFile(path.join(pathName, 'views', 'success.html'))
}