var express = require('express');

var controller = require('../controller/user.controller');

var router = express.Router();

module.exports = router;

router.get('/', controller.index );

router.get('/search', controller.search);

router.get('/create',controller.create);

router.get('/:id' ,controller.get);

router.post('/create', controller.postCreate);

module.exports = router;