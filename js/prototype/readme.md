- prototype 的三角恋

构造函数(constructor)   构造函数的原型对象      {}
Person.prototype = {}
Person.prototype.getname = function(){

}

实例


    Person 构造函数 都会有prototype属性 原型对象
    实例会通过prototype 属性 拿到所有方法


Person.prototype.constructor = Person


person   Person.prototype 
实例 person.__proto__ === Person.prototype
