1. 单列模式  ,  是设计模式是最基本的模式
    特点 : 不管new 多少次  ,  永远返回一个对象

2. 立即执行函数 +闭包  (优点)   =>    防止污染全局遍量
   
    
    instance 全局遍量
    var instance = null;  //污染命名空间
    function  Singleton(){
        if(instance){
            return instance;
        }
        return instance = this;//创建出来
    }


    立即执行函数, 返回函数,是构成闭包  ,常用手段
    生产环境  立即执行函数    创造闭包环境  变量一直都在
    闭包函数在运行时 , 可以引用到生产时闭包环境中的变量


















































