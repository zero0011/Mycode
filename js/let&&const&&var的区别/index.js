//let const var 的区别 以及 不声明直接定义

//块级作用域绑定

//提升机制
function getValue (condition) {

    if(condition) {
        var value = 'blue' ;
        return value ;
    } else {
        
    }
}