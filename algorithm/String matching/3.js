const expression = '{{}}{}{}' ; 
const expressionFalse =  '{}{{}' ;


const isBalanced = (str) => {
    const map = new Map([
        ["{" ,"}"] ,
        ["(",  ")"] ,
        ["[" , "]"]
    ]) ;
    // console.log(map.get('{'))
    // for(let [key , val] of map) {
    //     // console.log(key,val)
        
    // }
    // console.log([...map.values()])
    let stack = [ ] ;
    for(var i = 0 ; i < str.length ; i ++) {
        let node =  str[i] ;
        if(map.has(node)) {
            stack.push(node)
        } else if ([...map.values()].includes(node)) {
            if(stack.length !==0) {
                stack.splice(stack.length-1,1) 
            }
        }
    }
    return stack.length === 0
}


console.log(isBalanced(expression))