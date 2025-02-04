console.log("--------------------------");

let emaill = "taner@pausocial.com"
let firstNamee = "Taner"
let lastNamee ="GOKCEK"


console.log(emaill.length)

console.log(firstNamee[0]);                                                                 //£
console.log(firstNamee.charAt(1));                                                        //£


firstNamee = firstNamee.toUpperCase()
console.log(firstNamee);

firstNamee = firstNamee.toLowerCase()
console.log(firstNamee);

console.log(emaill.search("@"));                       //£   >kacinci karakter    
                                                                         //olmayan bir sey olursa -1 dondurur      

console.log(emaill[5]);


console.log(                                                
            emaill.slice(0,5)                                            //£ 5 dahil degil
            
);

console.log(emaill.slice(5));                               //£5den sonrasını alır 5 dahil.


let DOMAINN = email.slice( emaill.search("@") +1 )                      //££
console.log(DOMAINN);


console.log(
            DOMAINN.indexOf('.')          //£ noktanın    kacıncı old.                      
);

console.log(
            DOMAINN.slice(0,DOMAINN.indexOf('.'))                      //£orn             
);


//-----------------------------------------
emaill = emaill.replace('pausocial.com','egesocial.com')                //£
console.log(emaill);

console.log(
            emaill.includes('@')                                                    //£
);

console.log(
            emaill.search('sadadas')                                                //£
);


console.log(
            emaill.endsWith('egesocial.com')
);

firstNamee = "firstname"                                     //£ //£
lastNamee = "lastname"

let fullNameee = `
 ${firstNamee[0].toUpperCase()}${firstNamee.slice(1)}
 ${lastNamee[0].toUpperCase()}${lastNamee.slice(1)}


`
console.log(fullNameee);
