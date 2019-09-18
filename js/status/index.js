function Light(){
    this.state ='off';
    this.button = null;
    this.init();

}
Light.prototype.init  = function(){
    var button = document.createElement('button');
    button.innerHTML = '关';
    this.button = document.body.appendChild(button);
    this.button.onclick = ()=>{
        this.buttonPressed();
    }
    
}
Light.prototype.buttonPressed = function(){
    if(this.state == 'off'){
        console.log('开灯')
        this.state = 'on'
        this.button.innerText = '开'
    }else{
        console.log('关灯')
        this.state = 'off'
        this.button.innerText = '关'
    }
}

