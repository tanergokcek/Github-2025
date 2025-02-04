
let username = "Taner"
const DOMAIN = "pausocial.com"

let email = username + "@" +DOMAIN
console.log("Merhaba",username,"sitemize hosgeldin","Mail adresin",email);

                                                                                                                                                                                    //£
let infoo =  ` Merhaba ${username}                                                  
Sitemize hoşgeldin...
Mail adresin: ${email}
Mail adresinin uzunluğu: ${email.length}            
Borcunuz: ${(2+3) * 10 } TL
Gunun saat bilgisi : ${new Date().getHours() } : ${new Date().getMinutes()}
Kısa isminiz: ${username[0]} .

 `

console.log(infoo);