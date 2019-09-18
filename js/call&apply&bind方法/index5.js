//bind  函数
//bind() 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 this 值。
var x = 9 ;
var module = {
    x: 81 ,
    getX : function () {console.log(this.x)  }
} ;

module.getX()

var retrieveX = module.getX; 
retrieveX() ;

var boundGetX = retrieveX.bind(module) ;
boundGetX()
