//localhost 3001에 대한 대분류 
const express = require('express');
const router = express.Router();
const mainRouter = require('./main/index')
const userRouter = require('./user/index')

//사용하는 url을 적어놓는 공간. 
router.use('/', mainRouter);
router.use('/user', userRouter);



module.exports = router;