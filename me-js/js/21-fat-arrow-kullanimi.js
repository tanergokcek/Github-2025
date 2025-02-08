// onemli burası



function hello( firstName ) {
            console.log( `  Merhaba ${ firstName }  ` );
}

hello("javascript")


const helloFuncV1 =(firstName) => {console.log(`Merhaba ${firstName}`);}
helloFuncV1("helloFuncV1")

//Parantez koyulmayabilir parametre tekse
const helloFuncV2 =firstName => {console.log(`Merhaba ${firstName}`);}  
helloFuncV1("helloFuncV2")

const helloFuncV3 =(firstName, LastName) => 
{console.log(`Merhaba ${firstName} ${LastName}`);}

helloFuncV3("helloFuncV3","last Name info")

const helloFuncV4 =(firstName, LastName) =>  {
           let info = ` Merhaba ${firstName} ${LastName}`           
           console.log(info);
           return info
 }

 helloFuncV4("helloFuncV4","Other Info")



