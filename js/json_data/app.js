const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    // res.end('hello world')
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if(req.url="/"){
        let stream = fs.createReadStream(__dirname+'index.html');
        stream.pipe(res);
        //  res.end('你好')
    }else if (req.url = '/book'){
        //
    }
}).listen(1315)