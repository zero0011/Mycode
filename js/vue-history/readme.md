- 链接带来了页面的互联
一切皆资源 链接表示 URL
重新刷新 坏事  体验有点差
<html>
<head>
</head>
</html>

SPA     Single  Page  Application 

## 路由的做法   vue-router  会用不算什么    框架的实现
- 单页应用的结构
不再是n个页面了  1个页面 分为不动的部分和动的部分
    不动的是    导航  nav  a  #/page1
  #  /page1  path   页面切换    锚链接
URL  改变了的事件  ,  container 元素里  DOM  
大型页面   方便跳转
锚链接让点击链接  不跳转页面成为可能  #/page1   #开头


路由接管一切    new HashRouter()
constructor  订阅hashChange事件

- 新的前端世界在打开    要有新的秩序 
很容易所有路由  #/page  hashRouter
hash => f()  //container 显示
class  HashRouter 
this.routers = {} 
向外通过  register(hash , callback = function(){}) 方法

window.addEventListener('hashchange',this.load.bind(this))

call apply es5 
bind this 一样  返回一个新的函数  适合事件执行时
