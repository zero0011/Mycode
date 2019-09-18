//bind() 绑定函数

var module = {
    x:42 ,
    getX : function () {
        return this.x ;
    }
 }

 var unboundGetX = module.getX()

 console.log(unboundGetX) ;

 var boundGetX = unboundGetX.bind(module) ;
 console.log(boundGetX())