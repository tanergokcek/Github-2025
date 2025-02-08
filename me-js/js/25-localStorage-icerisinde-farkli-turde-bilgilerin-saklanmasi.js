
//Local Storage islemleri :

let user = { userName : " tanergokcekhein",isActive : true }


console.log(  user.isActive  );
console.log(  user.userName );

localStorage.setItem("userInfo",user)
let userInfo = localStorage.getItem("userInfo")
console.log(userInfo);                 //app>local kısmında object Object  donuyo..BU YUZDEN JSON a İHTİYAC VAR.


localStorage.setItem("userInfoo", JSON.stringify(user) )    //£££ onemlı > hepsini string seklinde yazar.
let userInfoo = localStorage.getItem("userInfoo")
console.log(userInfoo);

userInfoo = JSON.parse(userInfoo)           //£££ stringiyf  sonucunun hepsi string oldugu icin parse ettik.  
console.log(userInfoo);    

console.log(  user.isActive  );
console.log(  user.userName );


/* // kısa secilde
let user = {userName: "hakanyalcinkaya", isActive: true}
console.log(user)
localStorage.setItem('userInfo', JSON.stringify(user) )

let userInfo = localStorage.getItem('userInfo') // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

*/


// 2. egzersiz:
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali :(
localStorage.setItem('newItems', JSON.stringify(items))

let newItems = JSON.parse( localStorage.getItem('newItem') ) //JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..



