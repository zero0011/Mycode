function foo(a,b,...args){
    console.log(args)
    console.log(Array.from(arguments))
}
// foo(1,2,3,4)

function sum(...a){
//    console.log(a)
}

// sum(10,9,8)



//扩展运算符    将数组  对象   打散
//...
var arr = [0,1,2,3,4]
// console.log([...arr],arr)   //浅复制

var obj0={
    m:10
}

var obj1 = {
    a:1,
    b:2,
    c:3
}
var obj2 = {
    d:4,
    e:5
}


// var a = obj;
var a  = {...obj1}
a.a=2
// console.log(obj,a)


var c = Object.assign([],obj1,obj2);
c.c=100
// console.log(c)


var p =[1,2,4,5,6]
var l={...p}
// console.log(l)


let arr1=[100,0,99,1000]

let aa=arr1[0]; let bb=arr1.slice(0,2)
console.log(aa,bb)

