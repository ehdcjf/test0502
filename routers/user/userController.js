const {User} = require('../../models/index')// 현재 js파일이 있는 곳을 기준으로. 
let join = (req,res)=>{

    res.render('./user/join.html');
}

let login = (req,res)=>{

    res.render('./user/login.html');
}

let info = async(req,res)=>{
    let userList = await User.findAll({});
    userList.forEach((ele)=>{
        ele.dataValues.create_at =String(ele.dataValues.create_at).slice(4,15);  
        ele.dataValues.create_at =changeDateFormat(ele.dataValues.create_at);
        console.log(ele.dataValues.create_at);
    })
    res.render('./user/info.html',{
        userList: userList, 
    });
}

module.exports= { 
    join:join,
    login:login,
    info:info,
}


function changeDateFormat(str){
    arr=[]; 
    arr=str.split(' '); 
    switch(arr[0]){
        case 'January':
            arr[0]='01';
            break;
        case 'February': 
           arr[0] = '02';
           break; 
        case 'March' : 
            arr[0]='03';
            break; 
        case 'April': 
            arr[0]='04'; 
            break; 
        case 'May':
            arr[0]='05'; 
            break;      
    }
    str
    str=arr[2]+'-'+arr[0]+'-'+arr[1];
    return str; 
}