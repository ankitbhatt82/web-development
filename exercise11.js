console.log('factorial');
let factorial=1;
for (let i = 6; i >= 2; i--) {
    factorial=factorial*i;
}

console.log(factorial);

let arr1=[1,2,3,4,5,6];
let newArr=[];
const red=(a,b)=>{
    return a*b;
}
console.log(arr1.reduce(red));
let fact =1;
function factorial1(num1) {
    
    for (let j=num1; j>=2; j--)
    fact=fact*j;
}
factorial1(6);
console.log(fact);