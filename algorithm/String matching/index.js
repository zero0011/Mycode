//  正则实现  字符串匹配
const expression = '{{}}{}{}' ; 
const expressionFalse =  '{}{{}' ;






function isBalanced (exp) {
    //设置递归终止条件
    if(exp.length == 0) return true ;//是 有效字符串
    const reg = /({})|([])/g ;
    var  res = exp.replace(reg,'') ;
    if(res === exp ) return false ;
    return isBalanced(res);
}

console.time('递归')
console.log(isBalanced(expression)) ;
console.timeEnd('递归')

// 循环

function  $isBalanced(exp) {
    const reg = /({})|([])/g ; //正则表达式
    while(1) {
        var res = exp.replace(reg,'') ;
        if(res.length === 0) return true ;
        if(res === exp) return false ;
        exp = res ; 
    }
}
console.time('a')
console.log($isBalanced(expression))
console.timeEnd('a')
