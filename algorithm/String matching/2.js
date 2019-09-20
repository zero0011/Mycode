const expression = '{{}}{}{}' ; 
const expressionFalse =  '{}{{}' ;

function isBalanced(exp) {
    let info = exp.split('') ; //切割成数组
    // console.log(info) ;
    stack = [] ;  //  栈  push  pop

    for(let i = 0 ; i< info.length ; i++) {
        let el = info[i] ;
        if(el ==='{') {
            stack.push(el) ;
        } else if(el === '}'){
            //防止一开始就 }
            if(stack.length === 0) {
                return false ;
            }
            stack.pop()
        }
    }

    return stack.length === 0 ;
}


console.log(isBalanced(expressionFalse))