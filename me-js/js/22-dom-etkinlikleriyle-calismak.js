//HTML DOM EVENT diye aratarak w3schoolsdan bakabilirsin. click,mouseovervs.




let deneme = document.querySelector("#deneme")
deneme.addEventListener("click",domClick)                             //££ //click yerine mouseover da gelebilir.

function domClick( ){
            console.log("tiklandi");
         //   this.style.color = "red"                // £ this i unutma
         this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"                              //£onemli
}