// 2
// 解构
//name 被 重新命名为  myName
const {name : myName} = {name :'zs'} ;
console.log(myName) ;




//  3
const add = () => {
    //闭包
    //既能引用 , 又能不污染全局变量
    const cache = {} ;
    return num => {
        if (num in cache) {
            return `from cache ${num}`
        } else {
            const r = num + 10 ;
            cache[num] = r ;
            return `calcul ${r}` ;
        }
    }
   
}

//  addFunc  一个函数
const addFunc = add() ;
console.log(addFunc(10)) ; // calcul 20 
console.log(addFunc(10)) ; // from cache 20 
console.log(addFunc(2 * 5)) ;// from cache 20



//  4 
const arr4 = ['lihua','lilei'] ;
//  for  in
//枚举一个对象里面的属性
// {'0' :'lihua' , '1' : 'lilei'} 
//  for-in  枚举对象的属性
for(let item1 in arr4) {
    console.log(item1)
}

//  for-of  
//  for-of  遍历  (数组  set  Map  String) =>  可迭代对象 
//  for-of  可以用来遍历可迭代对象
for(let item2 of arr4) {
    console.log(item2)
}


// 5 
var status = 'global' ;
var obj = {
    status :'obj',
    getStatus : function() {
        return this.status ;
    }
}
console.log(obj.getStatus())
var fun = obj.getStatus ; 

console.log(fun())

console.log(fun.call(obj))

console.log(obj.getStatus.call(this))
console.log(this)

