const express = require('express'); 
const app = express(); 
const {sequelize} = require('./models/index'); 
const nunjucks = require('nunjucks'); 
const {User} =require('./models');
const indexRouter = require('./routers/index')



sequelize.sync({force:false,})//sequelize 안에 sync라는 메서드   결과는 new Promise 
.then(()=>{
    console.log('데이터베이스 접속 완료')
})
.catch(()=>{
    console.log('데이터베이스 접속이 실패하였습니다.'); 
});


app.set('view engine', 'html');
nunjucks.configure('views',{
    express:app,
});

app.use('/',indexRouter); 

/*
app.get('/', async(req,res)=>{
    //insert문 
    // User.create({ 
    //     userid:'manager2222',
    //     userpw:'1234',
    //     username:'관리자2',
    //     gender:false,
    //     userimage:'no image', 
    // })

   
    let userList = User.findAll({})
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error); 
    })
    console.log(userList);
    
    
    //select문의 사용. 
    //let userList = await User.findAll({}); //await가 실행되는 함수에 async
    //console.log(userList);
    
    // update문 

 
    User.update({
        userpw:'12341234',
        username:'관리자2123',
        gender:false,
        userimage:'yes image',
    },{
        where:{
            userid:'manager2222'
        }
    }); 
 

    //delete 
    // User.destroy({
    //     where:{ 
    //         id:1, 
    //     }
    // })

   // res.send('hello World');
    
    
//}) */


app.listen(3001,()=>{
    console.log("hello port 3001"); 
});