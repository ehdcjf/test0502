const express = require('express'); 
const router = express.Router(); 
const controller = require('./userController'); 


//해당 폴더의 하위 url을 관리하는 파일. 
//join login info 
router.get('/join',controller.join);
router.get('/login',controller.login);
router.get('/info',controller.info);


module.exports = router; 