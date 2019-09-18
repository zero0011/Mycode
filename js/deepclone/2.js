let obj = {
    a:1,
    field4:{
        child:'child',
        child2:{
            child2:"child2"
        }
    }
}
function clone(target){
    let cloneTarget = {}; //浅拷贝要的  内存空间
    //直接申请内存空间
    // for(const key in target){
    //     if(typeof(target[key])==='object'){

    //     }
    //     cloneTarget[key] = target[key];
    // }


    //递归  为了解决JSON 中又有JSON   
    //退出条件  

    return cloneTarget;
}

let obj1 = clone(obj);
obj1.a = 100;

console.log(obj)
console.log(obj1)


