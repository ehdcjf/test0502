const express = require('express');
const router = express.Router();
const controller = require('./mainController');

router.get('/', controller.main);

module.exports = router;