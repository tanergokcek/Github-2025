/* if mantıgında yazılır
if ( ) {         
}
*/

function helloWorld() {
            console.log("Hello World");
}

function hello() {
            console.log("Merhaba");
            helloWorld()
}

hello()                                              // £ boyle cagir. () unutma



/*  // hata alabiliriz.Dışardan cok parametre alıyor.ALMAMALI.

function userCheck ( ) {
if (  userName && age >= 18) {
   info.innerHTML = "ehliyet alabilirsiniz"
} else if (  !userName ) {
   info.innerHTML = "Kullanici Adiniz Yok"
} else if (  !(age >= 18) ) {
    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
}
}
userCheck()
*/