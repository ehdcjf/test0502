const { User } = require('../../models/index')// 현재 js파일이 있는 곳을 기준으로. 
let join = (req, res) => {

    res.render('./user/join.html');
}

let join_success = async (req, res) => {
    let body = req.body;
    await User.create({
        userid: body.userid,
        userpw: body.userpw,
        username: body.username,
        gender: body.gender,
    })
    res.render('./user/join_success.html', {
        username: body.username,
        userid: body.userid,
    });
}


let login = (req, res) => {

    res.render('./user/login.html');
}

let login_check = async (req, res) => {
    let body = req.body;
    let userid = body.userid;
    let userpw = body.userpw;
    res.redirect();
}

let info = async (req, res) => {
    let userList = await User.findAll({});
    userList.forEach((ele) => {
        ele.dataValues.create_at = changeDateFormat(ele.dataValues.create_at);
        console.log(ele.dataValues.create_at);
    })
    res.render('./user/info.html', {
        userList: userList,
    });
}

module.exports = {
    join: join,
    login: login,
    info: info,
    join_success: join_success,
    login_check: login_check,
}



















//날짜형식 바꾸는 함수 
function changeDateFormat(str) {
    arr = [];
    str = String(str).slice(4, 15);
    arr = str.split(' ');
    switch (arr[0]) {
        case 'January':
            arr[0] = '01';
            break;
        case 'February':
            arr[0] = '02';
            break;
        case 'March':
            arr[0] = '03';
            break;
        case 'April':
            arr[0] = '04';
            break;
        case 'May':
            arr[0] = '05';
            break;
    }
    str
    str = arr[2] + '-' + arr[0] + '-' + arr[1];
    return str;
}