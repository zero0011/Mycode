//循环 解决 深拷贝

var a = {
    a1: 1,
    a2: {
        b1: 1,
        b2: {
            c1: 1
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

function cloneLoop(x) {
    const root = {};

    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x,
        }
    ];

    while(loopList.length) {
        // 深度优先
        const node = loopList.pop();
        const parent = node.parent;
        const key = node.key;
        const data = node.data;

        // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof key !== 'undefined') {
            res = parent[key] = {};
        }

        for(let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k],
                    });
                } else {
                    res[k] = data[k];
                }
            }
        }
    }

    return root;
}

console.time("cloneLoop")
var b = cloneLoop(a);
console.timeEnd("cloneLoop")

console.time("clone");
var c = clone(a);
console.timeEnd("clone")
console.log(b)
console.log(c)