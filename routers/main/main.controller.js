const { User } = require('../../models/index')// 현재 js파일이 있는 곳을 기준으로. 

let main = async(req, res) => {
    let userid =req.session.userid;
    let isLogin =req.session.isLogin;
    
    /*
        어웨이트는 블록으로 묶인 영역에서 안에서 작동.  
        여기 아래에 있는 어웨이트 뻥션을 이프문으로 묶었더니
        이프문 밖에 있던 변수가 값을 못받아 에러가 발생. 
        
        이프문으로 묶어서. 어웨이트는 어웨이트대로 돌아가고. 
        이프문 밖에 있던 구문도 작동해서 에러가 발생 
    */
    if(isLogin){
        let user = await User.findOne({
            where:{
                userid,
            }
        }); 
        
        let userinfo = user.dataValues;
    
        res.render('./index.html', {
            userid: req.session.userid,
            isLogin: req.session.isLogin,
            userinfo,
            
        });
        ///////////////////////////임시로 해결, isLogin을 값을 판단하여 분기. 
    } else{ 
        res.render('./index.html', {
            userid: req.session.userid,
            isLogin: req.session.isLogin,
        });

    }

}

module.exports = {
    main: main,
}