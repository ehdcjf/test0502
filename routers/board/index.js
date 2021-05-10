const express = require('express');
const router = express.Router(); 
const controller =require('./board.controller'); 

router.get('/list',controller.list); 
router.get('/view',controller.view); 
router.get('/write',controller.write); 
router.post('/write',controller.writePost); 
router.get('/modify',controller.modify); 

module.exports= router; 