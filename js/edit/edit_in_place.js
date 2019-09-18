/**
 * @function 就地编辑
 * @author 千叶豆腐串
 * 网络的基础类 不要重复造轮子
 * 不是具体的业务,  抽象的公共业务
 */
function EditInPlace(id,parent,initVal){
    //constructor
    this.id=id;
    this.parentElemnet = parent;
    this.value = initVal || 'default value';
    this.createElement();
    this.attachEvents();
    
}
EditInPlace.prototype.attachEvents =function(){
    let self =this;//指向对象的
    //使用箭头函数  指向上一级的this
    this.staticElement.addEventListener('click',()=>{
        //this 被覆盖了
        this.convertToEdit();
    },false)
    this.fieldElement.addEventListener('keydown',(event)=>{
        if(event.keyCode == 13){
            this.staticElement.innerHTML = this.fieldElement.value;
            this.convertToText();
        }
    })
}
EditInPlace.prototype.createElement= function(){
    this.containerElement = 
        document.createElement('div');
    // this.containerElement = 

    this.staticElement =
        document.createElement('span');
    this.staticElement.innerHTML = this.value;

    this.fieldElement = document.createElement('input');
    this.fieldElement.type ='text';
    this.fieldElement.value= this.value;
    this.containerElement.appendChild(
        this.fieldElement);
    
    this.containerElement.appendChild(
        this.staticElement
    );
    this.parentElemnet.appendChild(
        this.containerElement
    )
    //俩个状态
    this.convertToText();
}
EditInPlace.prototype.convertToText = function(){
    this.fieldElement.style.display= 'none';
    this.staticElement.style.display='inline';
}
EditInPlace.prototype.convertToEdit =function(){
    this.fieldElement.style.display='inline';
    this.staticElement.style.display='none';
}