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
    if(typeof(target)==='object'){
        let cloneTarget = {};
        //性能问题
        for(const key in target){
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    }else
    return target;
}

console.log(clone(obj))