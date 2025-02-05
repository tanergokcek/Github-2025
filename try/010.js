/*

for(let index = 0; index <10; index++){                     
    console.log(index)
}


// let index = 0                                //DISARDA DA TANIMLAYABILIR
// for(; index <10; index++){                   //!!                  
//     console.log(index)
//  }


let users =["Lorem", "Ipsum", "Dolor"]

for(index=0; index <users.length; index++){
    console.log(users[index])
}

const userListDOM =document.querySelector("#userList")

for(index=0 ; index <users.length;index++){             //BU DONGU ONEMLI !!! FRONTEND E BILGI VERMEK

    const liDOM=document.createElement("li")           //createElement >li ekler
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM)                    //burası önemli

}

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipising', 'elit'
]

let counter =0

for(;counter <10; counter++){                       
    //console.log(counter)                       //ALTTAKI NOTU DAHA IYI GOREBILMEK ICIN BU KOD.
    if(counter ===5) {break}                    //FONK! alt ta asagi indiginde ne oldugunu bil.5 e kadar sayar.
    console.log(counter)
}

let counter2=0

for( ; counter2<10; counter2++) {

    if(counter2 ===5) {continue}                        //FONK
    console.log(counter2)
}

*/

// --------------------------BURDAN ONCESINI YAPARKEN YORUM SATIRINA AL.1

/*
const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'consectetur', 'adipising', 'elit'
]

const UL_DOM =document.querySelector('#userList')

let index=0

for(; index < LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor") {continue}             //BREAK YAPARAK DA DENE.Aşağıda.
    let LI_DOM =document.createElement('li')
    LI_DOM.innerHTML =LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}

// for(; index < LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolor") {break}             
//     let LI_DOM =document.createElement('li')
//     LI_DOM.innerHTML =LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

/*
// --------------------------BURDAN ONCESINI YAPARKEN YORUM SATIRINA AL. 2   > 1 e kadar */

/*

let counter =0;

while(counter <10){
    console.log(counter)
    counter++
}

// let userName="taner" 

// while(!userName) {                       //SONSUZ DONGU
//     console.log(userName)
// }

*/