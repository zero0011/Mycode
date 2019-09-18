- 深拷贝

- 

- 性能优化
    1. chrome 自带的性能优化工具
        console.warn()  console.error()
        console.time('for-in')  console.timeEnd('for-in')

        顺序执行    瞬间执行

    2. for key in 性能不太好 用for 代替吧     while 是最快的


- 浅拷贝
    返回的对象并不是独立的新的对象 
    跟直观理解有差异


- 浅拷贝 深拷贝 规避内存指同一地址问题
    返回新对象  JSON.parse(JSON.stringify())
    JSON.parse(JSON.stringify())
    会返回一个对象 , 复杂的 function(){}

    解决大部分问题
    

- 手写深拷贝
    1. 递归
    大的问题  由多个类似的问题构成   并且有一个 退出条件
    一层时   直接返回
