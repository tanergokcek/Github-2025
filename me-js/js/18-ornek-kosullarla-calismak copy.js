
let score = prompt("Puaninizi giriniz : ") 

let scoreDOM =  document.querySelector("#info")

scoreDOM.innerHTML = score


if ( score <=100 && score >=90 ) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : AA"  }
           ` 
}else if(score <=89 && score >=85) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : BA"  }
            ` 
}else if(score <=84 && score >=80) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : BB"  }
            ` 
} else if(score <=79 && score >=75) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : CB"  }
            `            
}else if(score <=74 && score >=70) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : CC"  }
            `            
} else if(score <=69 && score >=64) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : DC"  }
            `                     
}else if(score <=64 && score >=60) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : DD"  }
            `                     
}else if(score <=59 && score >=50) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : FD"  }
            `                     
}else if(score <=49 && score >=0) {
            ` ${scoreDOM.innerHTML += " Harf Notunuz : FF"  }
            `                     
}else {
            ` ${scoreDOM.innerHTML += " 0-100 araliginda giriniz."  }
            `       
}


const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`

const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`