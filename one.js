let http = require('http');
let fs = require('fs');
http.createServer((req,res)=>{
  if(req.url != '/favicon.ico'){
    console.log(req.url);
   fs.readFile('./www'+req.url, (err,data)=>{
    if(err){
      res.write("404")
    }else{
      res.write(data)
      
    }
res.end();
   });
  }
}).listen("8001",()=>{
  console.log("server is running.....")
})
