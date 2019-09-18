function f(x,y) {
    return x+y ;
}

function o(a,b) {
    return a*b ;
}

console.log(f.call(o,3,4));


//转换

function f(x,y) {
    return x+y ;
}

function o(a,b) {
    return a+b ;
}
//o是一个构造函数对象
o.m = f ;
console.log(o.m(3,4))
delete o.m //删除对象o的方法m()

//

function max() {
    var m = Number.NEGATIVE_INFINITY ;//声明一个负无穷大的数值
    //arguments  实参
    for(var i = 0 ; i < arguments.length ; i++) {
        if(arguments[i] >m) {
            m = arguments[i] ;
        }
    }
    return m;//返回最大值
}

var a = [23,45,2,46,62,45,56,63] ;
var m = max.apply(Object,a) ;
console.log(m)

var m = Math.max.apply(Object,a);
console.log(m)



//临时调用
function k() {
    console.log('zs')
}
k.call(Object)
// Object.k()

//