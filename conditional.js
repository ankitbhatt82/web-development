console.log('in this code we are studying about conditional statements');
let age=17;
let age2=10;
let grace=2;
let age3=18;
let age4=13;
let age5=23;
let age6=23;
let age7=73;
let age8="73";
age+= grace;

// age-= grace;
// age*= grace;
// age/= grace;
// age**= grace;
// age%= grace;
if(age>=18){
    console.log('you can drive')
}
else{
    console.log('you can not drive');
}
if(age2>=18){
    console.log('you can drive')
}
else{
    console.log('you can not drive');
}
console.log(age);
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);
if((age+grace)>=18){
    console.log('you can drive')
}
else{
    console.log('you can not drive');
}
if(age3==18){
    console.log('you can give trials')
}
if(age4!=18){
    console.log('you can not give trials')
}

// === is used to check the value and the type of variable
if(age5===age6){
    console.log('true');
}
else{
    console.log('false');
}
if(age7===age8){
    console.log('true');
}
else{
    console.log('false');
}

//logical operator
let a=12;
let b=42;
let c= 42;


// logical NOT
if(a!=b){
    console.log('true')
}
else{
    console.log('false')
}
// logical AND
if(a==b && b==c){
    console.log('true')
}
else{
    console.log('false')
}
// logical OR
if(a==b || b==c){
    console.log('true')
}
else{
    console.log('false')
}

// if else ladder
let d=4;
let e=5;
let f= d+e;

if(f<9){
    console.log('f is bigger than this')
}
else if(f==9){
    console.log('yes, f is equal to 9.')
}
if(f<9){
    console.log('f is smaller than this.')
}
// ternary operator
let num1=8;
let num2=19;
let num3 = num1>num2?(num1-num2):(num2-num1) 
console.log(num3)