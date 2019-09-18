// curry 函数  
//返回 新函数  逐渐消化

function curry(fn, len = fn.length){
    return _curry.call(this,fn,len);
}


function _curry(fn,len,...args){
    // typeof  function
    // console.log(args,"------")
    return function(...params){
        console.log(params,"6666");
        let _args = [...args,...params];
        console.log(_args,"8888")
        if(_args.length>=len){
            return fn.apply(this,_args);
        }else{
            return _curry.call(this,fn,len,..._args);
        }
    }
}

let _fn = curry(
    function(a,b,c,d,e){
        console.log(a,b,c,d,e);
    }
)



// _fn(1)(2)(3)(4)
_fn(1)
//commonjs  模块化机制  curry能力


module.exports = curry;



function f(a,b,c){
    return a-b-c;
}
console.log(f.length)