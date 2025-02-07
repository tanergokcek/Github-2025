// £ bak  hepsine


let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")                  //£ class ekleme       
console.log(greeting.classList);        

greeting.classList.add("title")
greeting.classList.add("new-info","second-class","third-class")
console.log(greeting.classList);

greeting.classList.remove("text-primary","second-class")                   //£ class kaldırma
console.log(greeting.classList);