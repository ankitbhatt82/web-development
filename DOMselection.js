// let var1=document.getElementsByClassName("box")
// console.log(var1);
// var1[2].style.backgroundColor= "yellow";
// let var2=document.getElementById("box4")
// var2.style.backgroundColor="red";
// document.querySelector(".box").style.backgroundColor =ss"green";
console.log(document.querySelectorAll(".box"));
// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor="pink";
// })
var element=document.querySelectorAll(".box")
    for (let i = 0; i < element.length; i++) {
        element[i].style.backgroundColor="yellow";
        
    }
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("h1"));
console.log(element[2].matches(".box"));//for id
console.log(element[3].matches("#boxid"));//for class
console.log(element[3].closest(".box"));
console.log(element[3].closest(".container"));
console.log(document.querySelector(".container").contains(element[0]));
console.log(document.querySelector(".container").contains(element[1]));
console.log(document.querySelector(".container").contains(element[2]));
console.log(document.querySelector(".container").contains(element[3]));
console.log(document.querySelector(".container").contains(document.querySelector("body")));