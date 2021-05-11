const { Board } = require('../../models/index')
const articleCount = 15;
const pageCount = 10;

let list = async(req,res)=>{
  let page=req.query.page; 
  let boardList=[]; 


  let tempList = await Board.findAll({
    order:[['id','DESC']],
  });

  let total_record = tempList.length;
  tempList.forEach(ele => {
    ele.dataValues.number = total_record--;
  });
  
    

  res.render('./board/list.html',{
    list:tempList, 
  });
}


let write = (req,res)=>{
  res.render('./board/write.html');
}

let writePost =async(req,res)=>{ 
  let body = req.body;
  let x= await Board.create({ 
    subject:body.subject, 
    userid:body.userid,
    content:body.content,
    }); 
    // res.redirect(`/board/view?idx=${results.insertId}`); 
    res.redirect('/board/list');

}

let view = async (req,res)=>{
  let idx = req.query.idx;
  let post = await Board.findOne({
    attributes:['id','number'], 
  });
  
  
  
  
  res.render('./board/view.html');


}

let modify = (req,res)=>{
  res.render('./board/modify.html');
}

module.exports={ 
  list, 
  modify,
  view,
  write, 
  writePost,
}