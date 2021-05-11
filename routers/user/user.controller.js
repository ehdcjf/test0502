const { User } = require('../../models/index')// 현재 js파일이 있는 곳을 기준으로. 
let join = (req, res) => {

    res.render('./user/join.html');
}

let join_success = async (req, res) => {
    let userid = req.body.userid;
    let userpw = req.body.userpw;
    let username = req.body.username;
    let gender = req.body.gender;
    //let userimage = req.file.path; // req.file 은 객체 
    let userimage = req.file ==undefined ? '' : req.file.path; 

    try {
        let rst = await User.create({
            userid,
            userpw,
            username,
            gender,
            userimage,
        })

    } catch (e) {
        console.log(e);
    }

    res.render('./user/join_success.html', {
        username: req.body.username,
        userid: req.body.userid,
    });
}


let login = (req, res) => {
    let flag = req.query.flag; 
    res.render('./user/login.html',{flag});
}

let login_check = async (req, res) => {
    let body = req.body;
    let userid = body.userid;
    let userpw = body.userpw;

    let result = await User.findOne({
        where: {
            userid: userid,
            userpw: userpw,
        }
    });

    if( result==null){ //로그인 실패 
        res.redirect('/user/login?flag=0'); //경고창 생성을 위한  uri ->flag=0
    }else{//로그인 성공 
        req.session.userid = userid;
        req.session.isLogin = true;
        
        req.session.save(() => {
            res.redirect('/',);
        })
    }

}

let logout = (req, res) => {
    delete req.session.isLogin;
    delete req.session.userid;

    req.session.save(() => {
        res.redirect('/');
    })
}

let info = async (req, res) => {
    let userList = await User.findAll({});
    
    // userList.forEach((ele) => {
    //     ele.dataValues.create_at = changeDateFormat(ele.dataValues.create_at);
    // })
    res.render('./user/info.html', {
        userList: userList,
    });
    
    // res.json({
    //     userList,
    // })
}

let userid_check =async(req,res)=>{ 
    let userid =req.query.userid; 

    let result = await User.findOne({
        where: {userid, }
    });
    
    //result 가 undefined면 생성가능 || result  객체가 존재하면 생성 불가능 
    if(result==undefined){
        flag= true; 
    } else{
        flag= false; 
    }
    res.json({
        join:flag,
        userid,
    })
}

module.exports = {
    join: join,
    login: login,
    info: info,
    join_success: join_success,
    login_check: login_check,
    logout:logout,
    userid_check,userid_check
}



















//날짜형식 바꾸는 함수 
// function changeDateFormat(str) {
//     arr = [];
//     str = String(str).slice(4, 15);
//     arr = str.split(' ');
//     switch (arr[0]) {
//         case 'January':
//             arr[0] = '01';
//             break;
//         case 'February':
//             arr[0] = '02';
//             break;
//         case 'March':
//             arr[0] = '03';
//             break;
//         case 'April':
//             arr[0] = '04';
//             break;
//         case 'May':
//             arr[0] = '05';
//             break;
//     }
//     str
//     str = arr[2] + ' - ' + arr[0] + ' - ' + arr[1];
//     return str;
// }