//简单类型的拷贝是拷贝值
//由于简单类型不需要太多内存  

let a = 1;//值
let b = a;

b = 2
console.log(a)

//复杂数据类型  拷贝是引用式赋值
//复杂数据类型内存大   仅仅是引用
let obj = {
    a:1,
    b:function(){
        console.log("bbbb")
    }
};


obj2 = obj
obj2 = JSON.parse(JSON.stringify(obj));
obj2.a = 2;
// 浅拷贝

console.log(JSON.stringify(obj))

console.log(obj,obj2)

console.log(obj.a , obj2.a)



// 深拷贝
//返回新的对象
// obj2 = JSON.parse(JSON.stringify(obj));


// var arr =[1,2,3]
// var arr1 = [...arr]
// arr1[2] = 100;
// console.log(arr,arr1)


