//£££ 

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop Pc", "Server", "Mouse", "Keyboard" ]

PRODUCTS.forEach(product =>     //product ismi : hersey olabilir
            console.log(product)
)

PRODUCTS.forEach( (product,index) =>
            console.log(product,index)
)

PRODUCTS.forEach( (product, index, array ) =>
            console.log(product,index,array)
)

PRODUCTS.forEach( (product, index, array) =>
            console.log(array[index])
)

PRODUCTS.forEach( (product, index, array) =>
            console.log(array[index] = product + " 777")
)
console.log(PRODUCTS);

PRODUCTS.forEach( (product, index, array) =>
console.log( array[index] = ` ${product.toUpperCase()}`)     
)

/*  //33 den kopyaladik
const userListDOM = document.querySelector("#userList")

for(index = 0; index < users.length; index++) {
            const liDOM = document.createElement("li")      //£
            liDOM.innerHTML = users[index]
            userListDOM.appendChild(liDOM)                  //££
}
*/

const userListDOM = document.querySelector("#userList")

PRODUCTS.forEach( item => {
            const liDOM = document.createElement("li")  
            liDOM.innerHTML = item
            userListDOM.appendChild(liDOM)  
}
)
