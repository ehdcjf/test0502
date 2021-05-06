
let join = (req,res)=>{
    res.send('hello join~');
}

let login = (req,res)=>{
    res.send('hello login~');
}

let info = (req,res)=>{
    res.send('hello info~');
}

module.exports= { 
    join:join,
    login:login,
    info:info,
}