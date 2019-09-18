function Animal(planet){
    this.planet = planet;
}
//constructor   构造器  函数是js的一等对象
//原型对象
Animal.prototype.getPlanet = function(){
    return this.planet;
}

function Person(name){
    this.name = name;
} 


//js 原型链
Person.prototype = new Animal('earth');
Person.prototype.getName  = function (){
    return this.name;
}

const person =  new Person("zs")
console.log(person.getPlanet())
console.log(person.getName())

//流弊
console.log(Person.prototype.__proto__ === Animal.prototype)

