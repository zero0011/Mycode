const expression = '{{}}{}{}' ; 
const expressionFalse =  '{}{{}' ;

//  {}{}{{}}
String.prototype.replace()


function isBalanced(exp) {
    const reg = /{}/g ;
    var len = exp.length ;
   var a =  exp.replace(reg,'') ;
   const b = /{}/g ;
   a.replace(b,'')
    console.log(a) ;
    return true ;
}

console.log(isBalanced(expression)) ;