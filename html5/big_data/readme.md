-网页上显示大量的html也是负担
http 请求 3000端口  伺服状态    server
/   index.html  传输给浏览器client
    127.0.0.1   localhost   本地开发
    192.168.43.166   局域网 远程
    浏览器  访问代理    client  ip:8080     下载下来(1.5s)
    远程    服务器(IP,domain)   伺服状态(http)    live-server 



    分页    limit=20&page=1   
    html5 来实现

    http    超文本传输协议  
    文件太大    分几次  等时间长    对大数据做分页
    http状态码      304 文件没有修改,   使用浏览器缓存


    得益于es6  Array.from({length:n} , (v,k)=>
    `新闻${k}`)  前端模拟 大数据
    -按页分割好     再次复用    
        Array.from(
            {length:Math.ceil(arr.length/size), (v,k)=>
            Array.from({
                length: size,()=>{}
            })})
