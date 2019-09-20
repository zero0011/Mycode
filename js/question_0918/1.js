//  1
//  freeze 可以冻结一个对象  
//  被冻结对象再也不能被修改了 
/**
 * 冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，
 * 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
 * 此外，冻结一个对象后该对象的原型也不能被修改
 */

const box = {a : 10 , b: {c : 100}} ;
Object.freeze(box) ;
box.a = 100 ;
box.b = 1000 ;
//深层对象无法冻结
box.b.c = 10000;
console.log(box)


//冻结数组
const arr = [ 0 , 1 ] ;
Object.freeze(arr) ;
arr[0] =123 ;
console.log(arr)
