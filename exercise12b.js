// var element=document.getElementsByClassName("box");
// console.log(document.getElementsByClassName("box"));

let element=document.querySelector(".container").children
console.log(element);
function getRandomColor() {
    let val1=Math.ceil(0 + Math.random()* 255);
    let val2=Math.ceil(0 + Math.random()* 255);
    let val3=Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
for (let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = getRandomColor()
    element[i].style.color = getRandomColor()
}   

// let element = document.getElementsByClassName("box");
// let element=document.querySelector(".container").children
// // console.log(element);
// function getRandomColor(){
//     let val1= Math.ceil(0 + Math.random()* 255);
//     let val2= Math.ceil(0 + Math.random()* 255);
//     let val3= Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(element).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })