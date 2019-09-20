var status = 'global' ;
var obj = {
    status :'obj',
    getStatus : function() {
        return this.status ;
    }
}
// console.log(obj.getStatus())
// var fun = obj.getStatus ; 

// console.log(fun())

// console.log(fun.call(obj))

// console.log(obj.getStatus.call(this))

// console.log(this)


// call apply  bind 方法
//  call apply 绑定到第一个参数 并且调用 无返回值
//  bind 绑定第一个参数 但不调用 , 不过 ,  bind 返回一个 绑定了 this  的函数

function bar () {
    console.log(this.name) ;
}

var obj3 = {
    name: 'obj3'
}

var cbar = bar.call(obj3) ;
var bbar = bar.bind(obj3) ;
bbar()
console.log(typeof bbar)
console.log(typeof cbar)


//  4  new 
function Test () {
    this.name = 'name' ;
    //this 指向 实例
}
// Test 里面 this  指向 test 
// 向test 上面添加 name 属性
var test = new Test() ; 
console.log(test.name)

//  5 优先级
//  new  >  bind  >  obj.getStatus()  >  getStatus()

var bindobj = {
    name: 'zs'
}
function TestNew () {
    this.age = 20
}
//this 指向bindobj
const BindTestNew = TestNew.bind(bindobj) ;
// BindTestNew() ;
var a = new BindTestNew() ;
console.log(bindobj.age)  ; 

console.log(a.age) ;

//  优先级 
//  new > bind,call,apply  >  obj.getStatus()  >  getStatus()
