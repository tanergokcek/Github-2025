//HEPSINE BAK !


let items =  [10, 20, 30, 40, 50 ]

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan","Mehmet"]

items.unshift(femaleUsers)
items.push(maleUsers)
console.log(items);      // >Array   10, 20, 30, 40, 50 Array şeklinde cıktı verir

console.log(items.length); //7 eleman der. 11 demeli

console.log(items[0]);
console.log(items[0][0]);
//console.log(items[0]["length"]);
console.log(items[0].length);

let newItems = items.splice(1, 5)               //Arrayden oge ayırmak > o kısmı alır
console.log("newItems : ",newItems);
console.log("items : ",items);

items.unshift("lorem")
items.push("ipsum")

console.log(items);
console.log( items.indexOf( "ipsum") );



//£ bu kopyalama ikisini de etkliyo o yüzden böyle yapma.
let copyItems = items
console.log(items);
copyItems.pop()
console.log("copyItems", copyItems);
console.log("items",items);

//1.YOL >KOPYALAMAK İÇİN
console.log("kopyalandiktan sonraki hali:");
copyItems = items.slice()
copyItems.pop() 
console.log("copyItemss : ",copyItems);
console.log("itemss",items);

//2.yol !!! bunu kullan
let es6Items = [...items]                       // £££
console.log(es6Items);

let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers);

console.log(allUsers.toString());
console.log(allUsers.join(" --- "));            // £

  // £££ > istedigimiz index bilgisine oge eklemek
allUsers.splice(allUsers.length-1, 0, "Melissa") 
console.log(allUsers);

allUsers.splice(Math.floor ( allUsers.length / 2) , 0, "Lorem")    //tam ortaya ekler
console.log(allUsers);