var express = require('express');

var db = require('../db');

var controller = require('../controller/product.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;