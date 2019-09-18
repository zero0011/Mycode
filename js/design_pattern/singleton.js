const Singleton = (function(){
    //闭包 closure
    let instance = null;//闭包区域

    console.log('---')
    return function(){
    //构造函数  constructor
    if(instance){
        return instance;
    }
    return instance = this;
    }
})();
// console.log(Singleton,typeof Singleton)

//实例  return  单例模式
//这个构造函数只实例化一个对象
console.log(Singleton)
const a = new Singleton();
const b = new Singleton();

console.log(a==b)

