//en son ornek icin
const LOREM_LIST = [
            "lorem", "ipsum", "dolor", "amet" , "consectetur", "adipisicing", "elit"
]

let counter = 0
/* //0 1 2 3 4
for( ; counter <10; counter++) {
            if(counter === 5) {break}
            console.log(counter);   
}
*/

  /*           //0 1 2 3 4 5
console.log("------------------");
for( ; counter <10; counter++) {
            console.log(counter);   
            if(counter === 5) {break}      
}
*/
 /* //0 0 1 1 2 2 3 3 4 4 5 
console.log("------------------");
for( ; counter <10; counter++) {
            console.log(counter);   
            if(counter === 5) {break}    
            console.log(counter);     
}
*/


for( ; counter <10; counter++) {
            if(counter === 5) {continue}
            console.log(counter);   
}

const UL_DOM = document.querySelector("#userList")
let index = 0

/*//ONEMLI
for(; index < LOREM_LIST.length; index++){
            if(LOREM_LIST[index] == "dolor" ) {break}
            let LI_DOM = document.createElement("li")
            LI_DOM.innerHTML = LOREM_LIST[index]
            UL_DOM.append(LI_DOM)
}
*/

for (; index <LOREM_LIST.length; index++) {
            if(LOREM_LIST[index] == "dolor") {continue}
            let LI_DOM = document.createElement("li")
            LI_DOM.innerHTML = LOREM_LIST[index]
            UL_DOM.append(LI_DOM)
}
