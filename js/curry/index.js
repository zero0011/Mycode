//普世
const curry = require('./b.js').default
function checkByRegExp(reg,string){
    return reg.test(string);
}

curry(checkByRegExp)



let checkCellphone = curry(checkByRegExp)(/^1[3-9]\d{9}$/);
console.log(checkCellphone('18307975813'));

console.log(checkByRegExp(/^1[3-9]\d{9}$/,'18307975813'))


console.log(
    //   .com  .cn
    checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/,
    '2732237782@qq.com')
)


checkByRegExp()



