
let laptop1 = {
            brand: "Apple",
            model: "MacBook Pro",
            "2kg" : 2,
}
console.log(laptop1);

console.log(laptop1.brand);
console.log(laptop1.model);
console.log(laptop1["2kg"]);        //£
//console.log(laptop1["brand"]);
//console.log(laptop1["model"]);

laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1);

laptop1.version = "10.15.7"
console.log(laptop1);

//------
//anahtar bilgisine ulasmak
keys =Object.keys(laptop1)
console.log(keys);
console.log(Object.keys(laptop1));

keys.forEach(keyInfo => {
            console.log(keyInfo)
            console.log(laptop1[keyInfo]);
}
)



// Deger Bilgilerine Ulasmak (values) -> Object.values(item)
console.log(
            Object.values(laptop1)
          )
          
          let values = Object.values(laptop1)
          
          values.forEach(value => { 
            console.log("value: ", value)
          })
          
          // tum bilgilerin tek yerde toplanmasi icin object kullanabiliriz ;)
          let setting = {
            password: 1234,
            userName: 'user1'
          }
