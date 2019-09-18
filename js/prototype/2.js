
class a {
    constructor() {
        this.name = name;
    }
}

a.prototype.b = function (){
    console.log('bb')
}

var x = new a()
console.log(x.b())
