1. 柯里化

编写一个函数  校验电话号码 , 邮箱

通用函数有好处  通用函数接收2个参数
                接收n个参数  返回一个函数
可以裂变吗 ?  

checkCellPhone = checkByRegExp(/^1[3-9]\d{9}$/)
checkEmail = checkByRegExp()


函数式编程

返回函数  ,每次只接收一个参数
返回的函数运行  ,闭包  ,最初参数的数量   ,
最后的参数是终止递归



2. 柯里化的过程是分函数   搜集参数的过程
  return  function() {}  闭包   fn  fn.length  永久存在
    搜集参数的过程

3. require + module.exports  es5  模块化方案

