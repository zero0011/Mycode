// 6 
class Foo {
    constructor() {
        this.a = 1 ;
    }
}
//   class  只是一个语法糖  背后还是es5

// console.log(typeof Foo)//func



//   7 
//  Symbol  es6 新增的数据类型
// string  number  Bool null undefined Symbol
//Object
let a = Symbol('a') ; 
let b = Symbol('b');
//给对象添加 相同属性   不会覆盖之前的属性
console.log(a==b)
var obj = {
    [a]:'a value',
    [b]: 'b value' ,
    b:'123'
}

console.log(obj)
console.log(Object.keys(obj)) // 返回一个对象上面 可 枚举的属性

console.log(Object.getOwnPropertySymbols(obj)) // 获取某个对象上所有的 Symbol  属性

console.log(a in obj) 