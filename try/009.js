// diziler.

/*

let domain ="worldteam"
let isActive = false
let items = [1, 2 , 3, isActive, domain] 
console.log(items)


items = [1, 2, 3, ]
console.log(items)

let emptyArray = []

console.log(
items.length
)

//document.querySelector('#info').innerHTML = items.length      //html icine yazmak icin.

console.log( items[0] )                                         //console.log (items(items.length -1))



console.log(

    typeof(items)

)



console.log(
    Array.isArray(items)                                            //fonk
)


console.log("[] : ", Array.isArray (  [] ) )
console.log("1  : ",Array.isArray ( 1 ))
console.log("true :",Array.isArray( true ))

console.log(
    items[Math.floor(items.length /2)]
)

console.log("----------------------------------------------------")

let items2 = [10, 20, 30, 40, ]
console.log("items2 - ilk hali",items2)

items2.push(50)                                              // Fonk. sona ekler.
console.log("50 >",items2)

items2.unshift(5)                                           //fonk.one ekler
console.log("5 >",items2)

let lastItem = items2.pop()                                 //fonk. sondan siler
console.log("last item: ", lastItem, "items2 : " ,items2)

let firstItem =items2.shift()                              //fonk onden siler.
console.log("firstItem: " ,firstItem, "items2: ", items2)



items2[0] =5;
console.log(">>>",items2)

items2[items2.length -1] =1000
console.log(items2)

items2[777] = 777
console.log(items2)

console.log("-----------------------------------------------------")

let items3 = [1, 2, 3, 4, 5]

let femaleUser = ["Damla","Aleyna","Gulce"]
let maleUsers = ["Enver","Tolga","Ahmet"]    //a h m 

items3.unshift(femaleUser)
items3.push(maleUsers)
console.log("items3>>>",items3)
console.log(">>>>",items3.length)


// /*console da bunlar yapıldı.
// items3[0][0]
// 'Damla'
// items3[0]["length"]
// 3
// items3[0].length
// 3  

// 

console.log(items3[0].length)
console.log(items3[0][0])               //damla bilgisine ulastık.


let newItems = items3.splice(1,5)
console.log("new Items",newItems)
console.log("items3" ,items3)

items3.unshift("Lorem")
items3.push("ipsum")

console.log(items3.indexOf("ipsum"))


console.log("------------------------")

let copyItems3 = items3
console.log(items3)

copyItems3.pop()
console.log("copyItems3 : ", copyItems3)
console.log("items3 : ",items3)                         //ANA KAYNAK DA DEGISTI. KOPYALANIRKEN . BU YUZDEN KOPYALAMA BOYLE OLMAZ.


//  Console da. ayni sonuclar.

// copyItems3
// (3) ['Lorem', Array(3), Array(3)]0: "Lorem"1: (3) ['Damla', 'Aleyna', 'Gulce']length: 2[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// copyItems3.pop()
// (3) ['Enver', 'Tolga', 'Ahmet']
// copyItems3.pop()
// (3) ['Damla', 'Aleyna', 'Gulce']
// copyItems3
// ['Lorem']
// items3
// ['Lorem']

//  

                                                //KOPYALAMADA 1.YOL
console.log("kopyalandiktan sonraki hali:")
copyItems3 = items3.slice()
copyItems3.pop()
console.log("copyItems",copyItems3)
console.log("items3",items3)
                                            //KOPYALAMADA 2.YOL   ********************************** !!!!!!!!!!!!!!                                  
let es6Items3 = [...items3]
console.log(es6Items3)

let allUsers = [...femaleUser, ...maleUsers]      //birden fazla arrayi birlestirme es6
console.log(allUsers)


console.log(allUsers.toString())                        //dizinin icini string olarak yazma
console.log(allUsers.join(" ==="))                      //elemanların arasina ""==="" koyar.

allUsers.splice(allUsers.length-1, 0, "Melissa")        //son elemanin adinin onune
console.log(allUsers)

allUsers.splice(Math.floor( allUsers.length / 2 ),0,"Lorems")
console.log(allUsers)

*/