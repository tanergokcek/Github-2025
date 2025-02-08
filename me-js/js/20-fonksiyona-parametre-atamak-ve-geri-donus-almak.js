//£ //hoca bu kısmı gereksiz karıştırdı.

//TEMEL KURALLAR :
// 1 : Bir Fonksiyon Bir veya Birden Fazla Parametre Alabilir veye Hiç Almayablir
// 2 : Bir Fonksiyon Dışarı Bilgi Gönderebilir(return) veya gondermeyebilir.
// 3 : Mumkunse Fonksiyonun Bağımlılıklarını Azaltmak gerekir

//BİR FONK İCİNDE TEKRAR TEKRAR TANIIMLAYABİLİRSİN DEGİŞKENİ.
//firstName > parametre olarak yazarsak dışa bağımlılığı azaltmış oluruz.

let firstName = "Lorem"

function greeting(firstName="",lastName="") {
            console.log( ` Merhaba ${firstName} ` );
            console.log( ` Merhaba ${firstName} ${lastName} ` );
}

console.log(firstName);  //degisken
greeting()
greeting("Parametre")



function greeting2(firstName, lastName) {
            let info = ` Merhaba ${firstName} ${lastName}  `
            return info
}

console.log(greeting2());  //HATA VERIR return oldugu icin boyle yapma!

let greetingsInfo = greeting2("Ad","Soyad")
console.log(greetingsInfo);


//-----------------------------------------

function domIdWriteInfo(id, info ) {
            let domObject = document.querySelector(  ` #${id} ` )
            domObject.innerHTML = info
}

//domIdWriteInfo("greeting", greeting2("Lorem","Ipsum")     )

let htmlnfo = ` span style= "color:red">COLOR REDDD  </span> `
//domIdWriteInfo("greeting", htmlnfo )


domIdWriteInfo("info", greeting2("Lorems","Ipsums"))