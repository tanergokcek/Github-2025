


let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")
let infoDOM = document.querySelector("#info")

let counter = infoDOM.innerHTML


increaseDOM.addEventListener("click",fonkArttir)                        //£££
decreaseDOM.addEventListener("click",fonkAzalt)


function fonkArttir( ){
            console.log(this.id)                            //£
            counter++
            infoDOM.innerHTML = counter                    //£££ yazdırmayı unutma
}

function fonkAzalt( ){
            console.log(this.id)                            //£
            counter--
            infoDOM.innerHTML = counter
}



/* hocanın yaptıgı
// Functions Bolum Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ?  counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
}
*/ 