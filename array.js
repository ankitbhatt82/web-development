let arr=[12,23,34,45,56,67];
// console.log(arr);
console.log(arr[3]);
// arr[2] = 78;
console.log(arr, typeof arr);
console.log(arr.length); 
console.log(arr.toString());
console.log(arr.join(" and ")); //to join all the element 
console.log(arr.pop()); //to remove an element
console.log(arr);
console.log(arr.push(123)); //to add an element
console.log(arr);
console.log(arr.push("ankit")); //to add an element
console.log(arr);
console.log(arr.shift()); //used to remove first element
console.log(arr);
console.log(arr.unshift("hello"));
console.log(arr);
console.log(delete(arr[4])); 
console.log(arr);
console.log('slice function');
console.log(arr.slice(1,3));
console.log(arr);
// console.log(arr.sort());
// console.log(arr);


// addition of array
console.log('array concat');
let a1=[21,52,23];
let a2=[47,58,46];
let a3=[79,18,92];
console.log(a1.concat(a2,a3)); 
console.log(a1.sort());
// console.log(a1);

let a4=[65, 76, 23, 95, 47, 17, 32];
console.log(a4);
console.log(a4.splice(0,3, 234, 343));// first number indicates the index from which we will start removing element, second element indicates the no. of element will be deleted. another number will be added to that array from the same index.  
console.log(a4);

let a5=[65, 76, 23, 95, 47, 17]
a5.forEach((value, index, arr) => {
    console.log(value, index, arr )
})



// map filter 
console.log('map, filter');
let arr1=[4,2,9,7,10,13];
let newArr=arr1.map((element)=>{
    return element**2;
});
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i];
//     newArr.push(element**2);
// }

console.log(newArr);

const greaterThanSeven = (e)=>{
    if (e>4) {
        return true;
    }else{
        return false;
    }
}

console.log(arr1.filter(greaterThanSeven));

let arr3=[2,4,6,3,8,9];
const red =(a,b)=>{
    return a+b;
}
console.log(arr3.reduce(red));


console.log(Array.from("javascript"));