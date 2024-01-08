// we are using for loop
for (let i = 0; i < 17; i++) {
    console.log(i);
}
let obj={
    name : "ankit",
    role: "web developer",
    company: "nhi hai"
}
// for in loop
for (const key in obj){
    const element=obj[key];
    console.log(key,element);
}

//for of loop

for (const ch of "ankit") {
    console.log(ch);
}


// while loop
console.log('while loop');
let j=1;
while (j<=10) {
    console.log(j+3);
    j++;
}

// do while
console.log('do-while loop');
let k=1
do {
    console.log(k*2);
    k++;
} while (k<=10);

console.log('do while always runs atleast one time, whether the condition is true or false.')
let l=15
do {
    console.log(l*2);
    l++;
} while (l<=10);