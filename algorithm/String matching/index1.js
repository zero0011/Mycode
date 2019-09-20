// 栈实现 字符串匹配
const expression = '{{}}{}{}' ; 
const expressionFalse =  '{}{{}' ;
const str = '}}}{}}{'


function isBalanced(exp) {
    let stack =  [] ;//利用数组模拟  栈
    let len = exp.length ; 
    for ( var i = 0 ; i < len ; i++) {
        let el = exp[i] ;
        if(el=='{') {
            stack.push(el) ;
        } else if( el = '}') {
            if (stack.length > 0 ) {
                stack.pop() ; //移除数组最后一个元素  , 并返回那个元素
            } else if(stack.length === 0 ) {
                return false ;
            }
        }
    }
    return stack.length === 0 ;
}



console.log(isBalanced(str)) ;