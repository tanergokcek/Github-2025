

let fullName = prompt("Lutfen Adinizi Giriniz")
console.log(fullName);

let greeting = document.querySelector("#greeting")
greeting.innerHTML = `${greeting.innerHTML}  <small style="color:red"> ${fullName} </small>
`
