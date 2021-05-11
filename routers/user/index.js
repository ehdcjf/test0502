const express = require('express');
const router = express.Router();
const controller = require('./userController');
const multer = require('multer'); 
const path = require('path');
const { route } = require('../main');

//멀터 셋팅 
const upload = multer({
  storage:multer.diskStorage({
    destination:function(req,file,callback){
      callback(null,'uploads/') //폴더명이  uploads 
    },
    filename:function(req,file,callback){
      callback(null,new Date().valueOf() +path.extname(file.originalname))
    }

  }), 
})


//해당 폴더의 하위 url을 관리하는 파일. 
//join login info 
router.get('/join', controller.join);
router.post('/join_success', upload.single('userimage'),controller.join_success);
router.get('/login', controller.login);
router.post('/login_check', controller.login_check);
router.get('/logout', controller.logout);
router.get('/info', controller.info);
router.get('/userid_check',controller.userid_check); 


module.exports = router;