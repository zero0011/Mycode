//继承
function f() {
    this.a = 'a' ;
    this.b = function () {
        console.log('b')
    }
}

function e () {

    f.call(this) ;
    console.log(this)
    console.log(a)
}

e()

//当前函数  e() 将继承函数f() 的所有属性 . 
//即使用 call() 和 apply() 方法能够复制调用函数的内部变量给当前函数体


