let random=Math.random();
let a=prompt('enter the number');
let b=prompt('enter second number');
let c=prompt('enter operation');
 
if (random<0.1){
    if (c=='+') {
        console.log(a-b);
    } else if(c=='-'){
        console.log(a+b);
    }
    else if(c=='/'){
        console.log(a**b);
    }
    else if(c=='*'){
        console.log(a/b);
    }
    else{
        console.log('retry')
    }
}
else{
    if (c=='+') {
        console.log(a+b);
    } else if(c=='-'){
        console.log(a-b);
    }
    else if(c=='/'){
        console.log(a/b);
    }
    else if(c=='*'){
        console.log(a*b);
    }  
    else{
        console.log('retry')
    } 
}