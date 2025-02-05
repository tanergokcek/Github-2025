//VIDEYU BIRDAHA -IZLE FORMHANDLE DA SIKINTI VAR.mantık anlasıldı

// index 2.copy den kontrol et.

//once index2.copy kismina bak.

/*

let formDOM =document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)


function formSubmit(event) {

    event.preventDefault()                                  //visual kod tamamlamaz.
    console.log("islem gerceklesti")
    
    let scoreInputDOM =document.querySelector("#score")
    console.log(scoreInputDOM.value)                       //value kismini visual kod tamamlamaz.

                                                        //calismazsa localstorage.
}
*/
//////////////////////////  /bolumsonuegz.

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit',formHandler)
const alertDOM =document.querySelector('#alert')

//BOOTSTRAP ALERTDEN.
const alertFunction = (title,message,className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`



function formHandler(event) {
    event.preventDefault()
    const USER_NAME =document.querySelector("#username")
    const SCORE =document.querySelector("score")

    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value)
        USER_NAME.value =""
        SCORE.value=""
    }else {
        alertDOM.innerHTML =alertFunction
        "Baslik bilgisi",
        "Eksik Bilgi girdiniz"
        "danger"
    }

   //        //hata veriyo



}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {
    let liDOM =document.createElement('li')
    liDOM.innerHTML =`
    ${userName} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add(
        `list-group-item`,`justify-content-between`,`align-items-center`
    )
    userListDOM.append(liDOM)
}


