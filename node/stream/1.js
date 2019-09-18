const fs_read = require('fs'); //文件模块
// 模块引入机制
fs_read.createReadStream('./sample.txt')
  .pipe(process.stdout);//输出设备的一种


//可写流  
  const fs_write= require('fs');
  fs_write.createReadStream('./sample.txt')
  .pipe(process.stdin);