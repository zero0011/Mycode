//正则表达式
//一个字符的
// let phoneReg = /^1[3-9][0-9]{9}$/
// console.log(phoneReg.test("18307975813"));

// let phoneReg = /(1[3-9][0-9])[0-9]{8}/;
// let str = '我的号码是18307975813,知道不';
// // phoneReg.test
// //得到手机号    判断服务商
// // console.log(phoneReg.exec(str))
// console.log(str.match(phoneReg))

// 2732237782@qq.com       邮箱服务商
let emailReg = /^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.[0-9a-zA-Z]+$/
console.log(emailReg.test('2732237782@qq.com'))
