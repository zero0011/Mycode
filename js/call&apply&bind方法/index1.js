//call  和  apply()  方法能够动态改变函数内this 指代的对象 , 主要通过变换call() 方法的第一个参数值来实现

var x = 'o' ;

function a() {
    this.x = 'a'
}

function b() {
    this.x = 'b'
}

//定义普通函数 , 提示变量x的值
function c() { 
    // this.x = 'zs' ;
    console.log(x) ;
}

//定义普通函数 , 提示当前指针所包含的变量的x的值
function f() {
    console.log(this.x) ;
}


//返回字符o , 即全局变量 x 的值 , this此时指向window 对象
// f();


// f.call(window)

f.call( new a() ) ;

f.call( new b() ) ;

f.call( c )