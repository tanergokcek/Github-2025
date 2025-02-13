
let domain = "pausocial"
let isActive = false
let items = [10, 20, 30, isActive, domain ]          // £ dizi olusturmak [ ]
console.log(items);

let itemss = [10, 20, 30 ]
console.log(itemss);

let emptyArray = [ ] 

console.log(
            items.length
);
document.querySelector("#info").innerHTML = items.length

console.log( items[0] );
console.log(items[ items.length - 1] );                     // £  dizinin son elemanı

console.log(
            typeof(items)  // --> objectt olarak cıktı veriyo.Böyle vermemeli
);

console.log(Array.isArray(items));      //£ Array olup olmadıgı

console.log(" [] : ",Array.isArray( [] ));        //t
console.log(" 1 : ",Array.isArray( 1 ));        // f        
console.log(" true : ",Array.isArray( true ));   //f

console.log(
            items[ Math.floor( items.length / 2  ) ]         // £ Arrayin ortadaki elemanı cagrılması
);
