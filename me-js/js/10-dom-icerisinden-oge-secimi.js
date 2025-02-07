



let h2 = document.getElementsByTagName("h2")           //£ BU VE ALTTAKİNİ COK KULLANMICAZ.
console.log(h2);
console.log(h2.title.innerHTML);

let title = document.getElementById("title")
console.log(title);
console.log(title.innerHTML);

/* //asagısı icin yorum satırına aldım
let link = document.querySelector("ul#list>li>a")
console.log(link);
console.log(link.innerHTML);
link.innerHTML = "LINK BILGISI DEGISTI"
link.innerHTML += " degisti"
*/
let linkk = document.querySelector("#kodluyoruzLink")       //£ ASIL BUNU KULLANCAZ
linkk.innerHTML += " degistiSSS"
linkk.style.color = "red"
linkk.classList.add("btn")