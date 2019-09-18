- canvas

- js 异步是核心问题 
    事件  定时器  fetch/ajax 
    代码的编写顺序和执行顺序不一样
    代码可读性下降

    js是单线程语言  JAVA是多线程
    在一次执行中,会把立即可执行的代码执行掉,    
    在把事件监听/定时器/ajax    放入    事件轮询中

    回调



-  img.onload   
    window.onload  开始表演 太慢了
    如果html  css js 都没有基本结构的搭建完成 ,
    游戏脚本有问题


    函数式编程
    完成开发需求 需求复杂   分成独立的多个子需求
    把子需求单独封装成一个函数

    贪吃蛇
    1.init()
    2.drawSnake()
    3.addEvent()
    4.refreshSnake()
    5.winOrloose()
    6.showResult()