const express = require('express');
const router = express.Router();
const controller = require('./userController');


//해당 폴더의 하위 url을 관리하는 파일. 
//join login info 
router.get('/join', controller.join);
router.post('/join_success', controller.join_success);
router.get('/login', controller.login);
router.get('/login_check', controller.login_check);
router.get('/info', controller.info);


module.exports = router;