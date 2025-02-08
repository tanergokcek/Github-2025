
/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/


const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`



let score = prompt("Puaninizi giriniz : ")
console.log(` Puaniniz = > ${score}`);

let info = document.querySelector("#info")
info.innerHTML = score


if( score < 101 && score >=0  ) {

            if (score <= 100 && score >= 90 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > AA ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 89 && score >= 85 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > BA ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 84 && score >= 80 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > BB ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 79 && score >= 75 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > CB ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 74 && score >= 70 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > CC ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 69 && score >= 65 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > DC ${SMILE} `
                        info.classList.add('text-primary') 
            }else if (score <= 64 && score >= 60 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > DD ${SMILE}` 
                        info.classList.add('text-primary') 
            }else if (score <= 59 && score >= 50 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > FD ${SMILE}`
                        info.classList.add('text-primary') 
            }else if (score <= 49 && score >= 0 ) {
                        info.innerHTML = `Puan = > ${score}  ve Harf Notunuz = > FF ${FROWN}`
                        info.classList.add('text-danger')   //£
            }            
}else {
            info.innerHTML = "Lütfen 0-100 araliğinda puan giriniz" 
}












