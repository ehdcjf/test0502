const { Board } = require('../../models/index')
const articleCount = 15;
const pageCount = 10;


///////////////////////////////리스트/////////////////////
let list = async(req,res)=>{
  let page=req.query.page; 
  let boardList = await Board.findAll({
    order:[['id','DESC']],
  });

  let total_record = boardList.length;
  let now =new Date();  
  now=String(now).slice(0,15);
  
  boardList.forEach(ele => {
    ele.dataValues.number = total_record--;
    let a=ele.dataValues.create_at;
    if(String(a).slice(0,15)==now){ //오늘 쓰여진 글은 시간출력 
      ele.dataValues.create_at = String(a).slice(16,24); 
    } else{ // 오늘 쓰여진 글이 아닌 글 날짜출력 
      let m = a.getMonth()+1; 
      let y = a.getFullYear(); 
      let d = a.getDate(); 
      ele.dataValues.create_at = `${y}-${m}-${d}`;
    }
  });

  res.render('./board/list.html',{
    list:boardList, 
  });
}

/////////////////////////////////////////라이트///////////
let write = (req,res)=>{
  res.render('./board/write.html');
}
////////////////////////////////////////라이트 포스트/////////
let writePost =async(req,res)=>{ 
  let body = req.body;
  let x= await Board.create({ 
    subject:body.subject, 
    userid:body.userid,
    content:body.content,
    }); 
    
    res.redirect('/board/list');
}

/////////////////////////////////////////////뷰 
let view = async (req,res)=>{
  let id = req.query.id;
  let post = await Board.findOne({
    attributes:['id','subject','userid','content','hit','create_at'],
    where:{
      id,
    }
  });

  post.dataValues.hit+=1; 
  let y =post.dataValues.create_at.getFullYear();
  let m =post.dataValues.create_at.getMonth();
  let d =post.dataValues.create_at.getDate(); 
  if(m<10) m='0'+m; 
  if(d<10) d='0'+d; 
  post.dataValues.create_at =y+'-'+m+'-'+d+' '+String(post.dataValues.create_at).slice(16,24); 
  
  await Board.update({
    hit:post.dataValues.hit,
  },{
    where:{ 
      id,
    }
  }); 



  res.render('./board/view.html',{
    post,
  });
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

