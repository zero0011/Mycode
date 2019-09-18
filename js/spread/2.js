//模板字符串
const str = `${[1,2,3,].map(e=>`<li>${e}<li>`).join()}`;

// console.log(str)

//标签摸版  提供了摸版字符串的信息     让我们自定义摸版字符串的组合

let total=100,count=10;
function combine(a,...args){
    console.log(a,args);
}
combine`the total is ${total}
,the count is ${count}   `;