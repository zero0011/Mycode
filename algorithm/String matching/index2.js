//  有效的括号   哈希表
const expression = '{{[]}}{}{()}' ; 
const expressionFalse =  '{}{{}' ;
const str = '}}}' ;
const str1 = '{{{' ;
const a = "(])"


function isBalanced (exp) {
    //Map 集合的初始化 方法
    let map  = new Map([
        ['{' , '}'] ,
        ['[' , ']'] ,
        ['(' , ')'] 
    ]) ;
    //  map.size  键值对 个数

    // console.log([...map.values()].includes('}'))

    let stack = [] ; //栈
    for(var el of exp) {
        if(map.has(el)) {
            stack.push(el) ;
        } else {
            if(stack.length === 0) {
                return false ;
            }
            if(map.get(stack.pop()) !== el ) {
                return false ;
            }
        }
    }
    return !stack.length ;
}

console.log(isBalanced(a))

