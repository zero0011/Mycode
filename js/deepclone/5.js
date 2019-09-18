//      利用循环实现深拷贝


var obj = {
    a:1,
    b:{
        name:"zs",
        sex:"nan",
        like:{
            footerball:true,
            basketball:false
        }
    },
    c:{
        name:"hw",
        sex:"nv"
    },
    d:[1,2,3]
};



//递归写法

function clone(source) {
    var target = {};
    for(var i in source) {
        if (source.hasOwnProperty(i)) {
            if (typeof source[i] === 'object') {
                target[i] = clone(source[i]); // 注意这里
            } else {
                target[i] = source[i];
            }
        }
    }
    return target;
}


var obj1 = clone(obj);

obj1.d = [3,2,1]


// console.log(obj);



var m = {
    a:1,
    b:[1,2,4]
}

var n = clone(m)

console.log(n)


console.log(m)