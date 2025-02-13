
let items = [10, 20, 30, 40, ]
console.log("items-ilk hali : ", items);

items.push( 50 )                                //sona ekler
console.log(" 50 : ", items );

items.unshift( 5 )                              //basa ekler
console.log(" 5 " , items);

items.pop()                                     //son elemanı atar
console.log(" Pop dan sonra " , items);
let lastItem = items.pop()
console.log(" Pop elemani Yakalama >" , lastItem);


let firstItem = items.shift() //ilk elemanı atar shift fonksiyonu
console.log( " firstItem : ", firstItem, " , items : ",items);


items[0] = 5;
console.log(items);

items[items.length - 1 ] = 100
console.log(items);

items[1000] = 1000
console.log(items);
