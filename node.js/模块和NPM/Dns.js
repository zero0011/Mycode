/**
 * @param { Node.js 实现 Web 解析 DNS }
 * 
 * @summary{ 下面 利用 node 的原生模块 实现一个 Web 版的 DNS 解析应用 }
 */


 /* 首先 require  加载需要的 Node.js 原生模块 */

 let http = require("http") ,  //  服务器 创建
     dns = require('dns') ,  // DNS查询
     fs = require('fs')  , // 文件操作
     url  = require('url') , // url 处理
     querystring = require('querystring') ; // 字符串处理



/* 创建 http 服务器 代码 , 返回显示 index.html  
* 由于 需求 实现的目的 是读取 一个 html 文件 , 所以  返回到
    客户端的 Content-Type 类型应该 修改为 text/html
*/

http.createServer(function (req , res) {
    // http  返回  html , 因此 Content-Type 为 html 
    res.writeHead(200 , {'Content-Type' : 'text/html'}) ;

    //  获取当前 index.html 的路径

    let readPath = __dirname + '/' + url.parse('index.html').pathname ;

    // 获得 url 地址       例如  "/parse"
    let pathname = url.parse(req.url).pathname ;
    req.setEncoding('utf8') ;


    // 调用 router 方法来处理 url 路由
    router (res , req , pathname) ;

}).listen(3000 , '127.0.0.1') ;


//  router 的逻辑 处理 
 function router (res , req , pathname) {
    switch (pathname) { // 根据 pathname 不同 , 执行 不同 的路径
        case  "/parse" :
            parseDns (res , req)
        break ;
        default : 
            goIndex (res , req) 
    }
 }


 /**
  * @desc  定义 响应 html 页面 的函数
  * @params  res  http 请求对称
  * @params req http  响应对象
  */

  function goIndex (res , req) {
    /*获取 index.html 的文件 路径 */
    let readPath = __dirname + '/' + url.parse('index.html').pathname ;

    /*同步读取 index.html 文件 的 信息 */
    let indexPage = fs.readFileSync(readPath) ;
     /*返回 */
     res.end(indexPage) ;
  }

/**
 * @desc  解析客户端传递来的域名 , 并且 返回 显示该域名 相应的 IP 地址
 * @说明 req.addListener("data" , function(){}) : 数据传递到服务器时触发的事件函数 , 读取客户端传递来的数据 , 获取数据 后 添加到 postData 中
 * @说明 req.addListener("end" , function() {}) : 数据 接收完成 , end 事件 被触发 后 , 执行 DNS 域名解析
 * @说明 getDns  异步域名解析 , 执行完成后 回调执行 function (domain , addresses) {} , domain 是传递的域名参数 , addresses 是解析 后返回的 IP地址列表
 */

 function parseDns ( res , req ) {
     let postData = "" ;
     req.addListener("data" , function ( postDataChunk ) {
        postData += postDataChunk ;
     }) ;

     /*http 响应 html 页面 信息 */
     req.addListener("end" , function () {
         let retData = getDns (postData , function (domain , addresses) {
             res.writeHead(200 , {'Content-Type' : 'text/html'}) ;
             res.end(`<!DOCTYPE html>
             <html lang="en">
             <head>
                 <meta charset="UTF-8">
                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
                 <title>DNS</title>
             </head>
             <body>
                 <div style="text-align: center;">
                     Domain : <span style="text-align: center">  ${domain} </span><br>
                     IP : <span style="color: red;">  ${addresses}  </span>
                 </div>
             </body>
             </html>`)
         })
         return ;
     })
 }


 /**
  * @function getDns () 方法 , 该方法是一个异步回调方法函数 , 通过 异步执行 DNS 解析 , 然后
  * 回调执行 数据 返回 到 客户端 , 根据 domain 和 addresses 参数 
  * @说明  dns.resolve(domain , function (err , addresses ) {} 方法可以查看 官网 API) 
  * @说明 let domain : 应用 querystring 模块 来 获取 post 数据 中 键值 为 search_dns 的值
  * 
  * @note  最后看一下 node.js  是如何解析 DNS 的 , 这里主要涉及  DNS 模块 中的 resolve API 的使用 。
  *     大家 注意 , getDns () 方法 需要 携带一个 callback 参数 , 由于 dns,resolve() 方法 是一个 异步执行
  * 函数    , 因此 如果希望得到返回 结果 , 就需要 添加 一个 回调函数 , 将结果 返回 到 回调 函数 中 , 传递到
  * 函数外面 
  *     
  */

  function getDns ( postData , callback) {
    let domain = querystring.parse(postData).search_dns ; 
    /*异步域名解析 */ 
    dns.resolve(domain , function (err , addresses) {
        if(!addresses) {
            addresses = ['不存在域名'] ; 
            console.log(err.code)
        }
        // 回调函数
        callback(domain , addresses) ;
    })
  }