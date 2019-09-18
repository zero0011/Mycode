// live-server
const http = require('http');

// web server 一直伺服
// 向requset    返回    response 资源 
const server = http.createServer((req,res)=>{
    // res.end('hello world');
    // index.html显示
    //req 浏览器  访问网站的代理
    if(req.url=='/'){
        const fs= require('fs');
        fs.createReadStream('./index.html')
        .pipe(res);
        
        // res.end('index page');
    }else if(req.url== '/userinfo'){
        const info= {
            'name' :'zs',
            'src':'myu'
        }
        res.writeHead(200,{
            'Content-Type':'text/plain'
        })
        res.end(JSON.stringify(info));
    }
    else{
        res.end('hello world');
    }
})

server.listen(1314);