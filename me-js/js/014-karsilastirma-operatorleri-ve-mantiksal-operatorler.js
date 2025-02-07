
//genel oku

let price = 100
let user = "hakan"

console.log("== : ", price == 1);
console.log("== : ", price == 100);

console.log("== : ", price === 1);
console.log("== : ", price === 100);

console.log(user != "guest")                                            //£

console.log("price < 100 ",price < 100);
console.log("price <= 100 ", price < 100);      // £ 100 un rakam oldguna diger 100 un string olduguna dikkat et

console.log("price > 200", price > 200);
console.log("price >= 100",price >= 100);

price= 0
console.log(price > 0  && user != "quest " );
console.log(price > 0  || user != "quest " );

user = "quest"
price = 1 
console.log(price > 0 && !user == "quest");



