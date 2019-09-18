如果我们有好多消息要从用户收集
表单不要太长    让表单更加易用
移动    分页

pc端 , 多个表单     document.forms[]

js在面向对象中  
this 指向谁
EditInPlace     类  抽象概念    老板
let editor = new EditInPlace(); //员工
this  指向的是  editor

this.staticElemnt = document.createElement('span)
this.converToText();//即是函数  又是对象的方法  this仍然指向对象

this.staticElement.addEventListener('click',function(){
    this=>this.staticElement    语法定义
    作为事件来执行  内部的this  指向事件发生的元素
})
函数内部的this是执行的时候动态决定的    由执行的方法和方式决定的
this.converToText();    //函数是作为对象的方法被调用    this指向对象

EditorInPlace   类  constructor  +  prototype （原形对象   object）

function    EditorInPlace(){}      //函数首字母大写 构造器
new EditorInPlace   
EditorInPlace.prototype ={
    converToText:function(){}
    ....
}


- this  的用法
- 代码的组织    attachEvents
- 状态的方法