// data >setting.json diye dosya olusturduk

fetch("data/settings.json").then(  
            response => {
                        console.log(response);
            }
)

console.log("----------------------");

fetch("data/settings.json").then(
            response => {
                        return response.json()
            }
).then(responseJson => {
            console.log(responseJson)
})

console.log("----------------------");

//JSON DOSYASINDAN VERI CEKTIK.
fetch("data/settings.json").then(
            response => response.json()
).then(responseJson => {
            console.log(responseJson)
            console.log(responseJson.userName)
})
console.log("----------------------");

//API UZERINDEN VERI CEKTIK.
fetch("https://jsonplaceholder.typeicode.com/posts").then(
            response => response.json()
).then(responseJson => {console.log(responseJson)})              


fetch("https://jsonplaceholder.typeicode.com/posts").then(
            response => response.json()
).then(responseJson => {
           responseJson.forEach(item => console.log(item))
})







let userListDOM = document.querySelector("#userList")

// API uzerinden veri cektik
fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
  })
})