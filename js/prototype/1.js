//  es5 面向对象
function Person(name){
    // constructor
    this.name = name;
}

//男主
Person.prototype = {
    getName : function(){
        return this.name
    },
    playlol : function(){
        // console.log('lol')
    }
}

//new + fun()    产生新的对象
//实例      第三者
let person  = new Person('zs');
console.log(person.playlol())
