## vue react  SPA  单页应用体验更好  单页应用  
传统网页  通过链接把网站组织起来的  重新加载新的页面 发送一个新的http请求
/about  req  res 过程
req /about  
# 时间  网路传输时间  01 二进制   电频信号  光速 + node/java/python  后端代码  查数据库执行时间  +  把html返回  白屏时间
1.5s 用户就会离开
res  /about     about.html

路由是独立的

- 网站MVC 应用(Vue App)的体验路由   白屏问题
VueRouter
- hashRouter
    #/shop 锚链接
    优点是 ie8以上都支持
    缺点 : 路由不纯粹
- HistoryRouter     history

VUERouter 俩种实现方式 = hashRouter(兼容性) + HistoryRouter(长得好)


