// index 2 den kontrol et.

//once index2 kismina bak.

/*

let formDom=document.querySelector('#userForm')
formDom.addEventListener('submit',formSubmit)                      //submit:gonder demek.








function formSubmit(event){                             //event
                                            //gondere bastıktan sonra sayfa yenilenmeden islem yapmasi icin.
    event.preventDefault()                  //bu FONK.
    console.log("islem gerceklesti")
    let scoreInputDOM = document.querySelector('#score')
    console.log(scoreInputDOM.value)

}
*/

/////////////////////////////////////////////////////////
/*
//bolum sonu uyg.

let userFormDOM =document.querySelector('userForm')
userFormDOM.addEventListener('submit',formHandler)

function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector("#username")
    const SCORE =document.querySelector("#score")

    addItem(USER_NAME.value, SCORE.value)             // fonk yazdiktan sonra

}

let userListDOM =document.querySelector('#userList')

const addItem = (userName,score) => {
    let liDOM =document.createElement('li')                     //create element
    liDOM.innerHTML = `
    ${userName}
    <span class="badge bg-primary rounded-pill">${score}</span> `               //bootsrapten buda.
    

    liDOM.classList.add(
    'list-group-item','d-flex','justify-content-between','align-items-center'           //li bootstrap classlarindan kopyaladık
    
    )

    userListDOM.append(liDOM)                   // !!
}

*/


//-------------------- yeniden------------------------------

