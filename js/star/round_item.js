/**
 * @param {*} zero0011
 * @param {*} star
 * //一个功能 ，一个文件    一个类一个文件
 * 模块化 多人协作
 * @param {*} index 
 * @param {*} x 
 * @param {*} y 
 * @param {*} ctx 
 */
function RoundItem(index,x,y,ctx){
    this.index = index;
    this.x = x ;
    this.y = y;
    this.ctx = ctx;
    this.r = Math.random() * 3+1;
    this.color = 'rgba(255,255,255,1)';

}

RoundItem.prototype.draw = function(){
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x,this.y*300,this.r,0,2*Math.PI,false);
    this.ctx.closePath();
    this.ctx.fill();
}

RoundItem.prototype.move =function(){
    this.y -=20;
    this.draw();
}