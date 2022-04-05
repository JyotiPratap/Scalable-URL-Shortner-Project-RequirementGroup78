const express = require('express');
const router = express.Router();
const urlcontroller= require("../controller/UrlController")




router.post('/url/shorten',urlcontroller.urlCreate)
router.get('/:urlCode',urlcontroller.redirectToOriginalUrl)
 
module.exports = router;
