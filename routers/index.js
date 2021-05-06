const express = require('express'); 
const router = express.Router(); 
const mainRouter = require('./main/index.js')
const userRouter = require('./user/index.js')

router.use('/',mainRouter);
router.use('/user',userRouter);



module.exports = router; 