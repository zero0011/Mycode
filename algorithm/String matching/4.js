const map = new Map([
    ["{" ,"}"] ,
    ["(",  ")"] ,
    ["[" , "]"]
]) ;
// console.log(map.get('{'))
// for(let [key , val] of map) {
//     // console.log(key,val)
    
// }
console.log([...map.values()])