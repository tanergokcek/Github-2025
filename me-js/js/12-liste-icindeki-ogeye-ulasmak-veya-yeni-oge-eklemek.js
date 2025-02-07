


let lastChild = document.querySelector("ul#list>li:last-child")
console.log(lastChild);

let firstChild = document.querySelector("ul#list>li:first-child")
console.log(firstChild.innerText);
firstChild.innerText =  "degistiiiiiiiiiiiiiiiiiiiii"

lastChild.innerHTML = "son oge degistiSSSS"

                                                                        //£££
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')                          //£££ li nesnesi  olusturur.
liDOM.innerHTML = "KENDİ OLUSTURDUGUMUZ OGE"
ulDOM.append(liDOM)                                       //£££ listeye yi  sona ekler  
//ulDOM.prepend(liDOM)                                      //£basa ekler

console.log(ulDOM.lastChild);