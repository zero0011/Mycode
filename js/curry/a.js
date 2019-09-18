function sum(a,b,c){
    return a+b+c;
}

let _sum = curry(sum);
let A = _sum(1);
let B = A(2)