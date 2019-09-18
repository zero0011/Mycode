//定义一个简单的函数
function r (x) {
    return  (x) ;
}

//定义一个稍复杂的函数 , 该函数将修改第一个参数值 , 并返回参数集合
function f(x) {
    x[0] = x[0] + '>' ;
    return x ;
}


//循环更改函数r() 中的返回值
function o() {
    var temp = r ;
    r = function () {
        return temp.apply( this , f(arguments )) ;
    }
}

function a() {
    o() ;
    console.log(r ('='))
}

for(var i = 0 ; i < 10 ; i++) {
    a() ;
}