const Event = require('events');
const ev = new Event();

//订阅这
ev.on('price',function(){
    console.log('666')
})

//发布者
// ev.emit('price')

ev.emit('price','zs')