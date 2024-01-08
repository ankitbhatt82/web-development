console.log(document.querySelector(".box")); 
document.querySelector(".container");
// document.querySelector(".box").innerHTML="this is ankit";
console.log(document.querySelector(".box").innerHTML);
// document.querySelector(".box").hasAttribute("style");
// // console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".container").innerHTML);//include inner element only
console.log(document.querySelector(".container").outerHTML);//include inner element only
// console.log(document.querySelector(".container").innerText);
// console.log(document.querySelector(".container").tagName);
// console.log(document.querySelector(".container").nodeName);
// console.log(document.querySelector(".container").textContent);

// console.log(document.querySelector(".container").hidden);
// console.log(document.querySelector(".container").hidden=true);
// console.log(document.querySelector(".box").innerHTML = "this is ankit");

console.log(document.querySelector(".box").hasAttribute("style"))
console.log(document.querySelector(".box").getAttribute("style")) 
console.log(document.querySelector(".box").setAttribute("style", "display:inline"))    

console.log(document.querySelector(".box").removeAttribute("style"))
// let div= document.createElement("div");
// div.innerHTML = "hi my name is ankit bhatt."
// div.setAttribute("class", "created")
// document.querySelector(".container").append(div);
// console.log(div.innerHTML = "hi my name is ankit bhatt.")
// console.log(div.setAttribute("class", "created"))
// console.log(document.querySelector(".container").append(div));
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".container").prepend(div);
let cont=document.querySelector(".container")
// cont.insertAdjacentHTML("afterend", "hi I am under the water , here too much raining, please help me.")
// cont.insertAdjacentHTML("afterbegin", "hi I am under the water , here too much raining, please help me.")
// cont.insertAdjacentHTML("beforebegin", "hi I am under the water , here too much raining, please help me.")
cont.insertAdjacentHTML("beforeend", "hi I am under the water , here too much raining, please help me.")
// document.querySelector(".box").remove();
// document.querySelector(".box").remove();
document.querySelector(".container").classList;
console.log(document.querySelector(".container").classList);
// document.querySelector(".container").classList.add("bhatt");
console.log(document.querySelector(".container").classList.add("bhatt"));
// console.log(document.querySelector(".container").classList.remove("red"));
console.log(document.querySelector(".container").classList.toggle("red")); // toggle mtlb khula h to band aur band h to khul jaega
// console.log(document.querySelector(".container").classList.toggle("red")); // toggle mtlb khula h to band aur band h to khul jaega
// console.log(document.querySelector(".container").className);