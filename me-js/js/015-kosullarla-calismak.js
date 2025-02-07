


let username = prompt("Kullanici Adinizi Giriniz")
//eger kullanici bilgisi varsa ekrana ismini yazdir
//eger (username.length > 0 ) {console.log(username)} degilse {console.log("bilgi yok")}
//if (username.length > 0) {console.log(username)} else {console.log("bilgi yok")}



if(username) {                                   // ££ username.length>0 DEMEK 
    console.log(`Kullanici Bilginiz ${username}`);
} else {                                                // ££ else i dikkatli kullan gelende else if kullan
    console.log("bilgi yok");
}