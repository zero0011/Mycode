const fs = require('fs');
const util = require('util');

const readFile =  util.promisify(fs.readFile);
const readDir = util.promisify(fs.readdir);

fs.readdir('./static/',(err,files)=>{
    console.log('files',files)
})

fs.readDir('./static').then(res =>{
    console.log(res);
})

readFile('./index.js',"utf-8").then(data =>{
    // console.log(data)
})

fs.readFile('./index.js' ,'utf-8', (err , data)=>{
    // console.log(data)
})

