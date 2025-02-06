/* hata beriyo diye yorum satırına aldım ama hata çözülür.

let lastChild = document.querySelector("ul#listt>li:last-child")  //casilmiyo ama calısır >>html karısık oldugu icin calısmıyor

lastChild.innerHTML = "son oge degisti."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti"

*/

/* hata veriyo ama cozulur

let ulDOM = document.querySelector("ul#listt")
let liDOM =document.createElement("li")

liDOM.innerHTML = "Kendi olusturdugumuz Oge"

ulDOM.append(liDOM)

console.log(ulDOM.lastChild);

ulDOM.prepend(liDOM)
*/