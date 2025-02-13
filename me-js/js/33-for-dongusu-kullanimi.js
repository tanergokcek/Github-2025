

for (let index = 0; index <10; index++) {
            console.log(index);
}

/* //Dısarda da tanimlayabiliriz.
let index = 0
for( ; index <10; index++ ) {
            console.log(index); }
*/

let users = [ "Lorem", "Ipsum", "Dolor", ]

for(index = 0; index < users.length ; index++){             
            console.log(users[index]);                 //£     
}


//ONEMLI
const userListDOM = document.querySelector("#userList")

for(index = 0; index < users.length; index++) {
            const liDOM = document.createElement("li")      //£
            liDOM.innerHTML = users[index]
            userListDOM.appendChild(liDOM)                  //££
}