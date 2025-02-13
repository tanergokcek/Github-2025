//For : genelde bir sayida dondurmek icin
//while : SONSUZA KADAR > BIR SEY OLANA KADAR


let counter = 0;
while(counter < 10) {
            console.log(counter);
            counter++
}

/* //SONSUZ DONGUYE SOKAR
let userName;
while (userName != "") {
            console.log(userName);
}
*/

let userName = ""
while (userName == "") {
            userName = prompt("İsim giriniz : ")
            console.log(userName);
}