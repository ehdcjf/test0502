
let main = (req, res) => {


    res.render('./index.html', {
        userid: req.session.userid,
        isLogin: req.session.isLogin,
    });
}

module.exports = {
    main: main,
}