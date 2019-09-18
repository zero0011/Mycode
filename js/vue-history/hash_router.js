class HashRouter{
    constructor() {
        //  key (/page) => val (func 由外界传进来)
        this.routers = {}
        window.addEventListener('hashchange',this.load.bind(this))
    }

    load() {
        // console.log(this)
        let hash  = location.hash.slice(1);
        let handler ; //处理函数    由外界决定
        handler  = this.routers[hash];
        // handler(); 
        //仅限于自身的属性  而 不去查找原型链上的属性
        if(!this.routers.hasOwnProperty(hash)){
            handler = this.routers['404'];
        } else {
            handler = this.routers[hash];
        }
        try {
            handler.apply(this);
        } catch (e) {
            console.error(e);
            (this.routers['error'] || function() {}).call(this,e)
        }
    }
    
    //404
    registerNotFound(callback = function(){}){
        this.routers['404'] = callback;
    }

    register (hash , callback = function(){}) {
        this.routers[hash] = callback ;
    }
    registerError(callback = function(){}) {
        this.routers['error'] = callback;
    }
}
