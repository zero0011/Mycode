var total = 100; 
var num =10;

//  total/num*2

function hongbao(total,num){
    const  arr = [];
    let restAmount = total ; 
    let restNum  = num;


    for(var i = 0 ; i<num -1; i++){
        let amount =parseFloat(Math.random()*(restAmount/restNum)*2).toFixed(2);
        restNum--;
        restAmount-=amount;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2))
    return arr;
}

var a =hongbao(100,10) ;
var sum = 0;
for(var i =0 ; i<a.length ; i++){
    sum+=Number(a[i])
}

console.log(sum)



