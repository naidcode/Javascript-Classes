//  let product = {
//   name: 'nahid ',
//   age: 20,
// }

// let result;

// result = product;

// console.log(result);
// console.log(result.name); //we can see object values by putting '.' and value name.
// console.log(product.age);

// result.name = 'fazil'; // we can change the value of object like this.
// result = product + "hello object" // Crazy Testing.
// console.log(result);

// console.log(product.price);  //not having property if we use result show undefined.

// product.prices = "2500";  // if you want to add new property use this. 
// console.log(product)

// delete product.prices;  //to delete the property from object use this.
// console.log(product) 

// let product2 = {
//   name: "fazil pasha ",
//   ['Delivery-time']: "1 clock",   //you can type like this also if we have symbols like in center "-,+,/,*" on this time we can write like this
//   rating: {
//     stars: 4.5,    //object inside object
//     count: 87
//   },
//   fun: function name() {
//     console.log("nahid pasha ")  //function inside object
//   }
// }

// console.log(product2);
// console.log(product2['name'])
// console.log(product2['Delivery-time']);

// console.log(product2.rating.stars);
// product2.fun();


// console.log(JSON.stringify(product2));

// const jsonstring = JSON.stringify(product2);
// console.log(JSON.parse(jsonstring));


// console.log('hello'.length);
// console.log('hello'.toUpperCase())

// ------- EXAMPLE 1-------
// SWAP 2 ELEMENTS IN AN ARRAYS

let colors = ["red" , "green" , "blue", "white" , "black"];
[colors[1] ,colors[2]] = [colors[2] ,colors[1]];

console.log(colors);

// ------- EXAMPLE 2 -------
// ASSAIN ARRAY ELEMENT TO VARIABLES

let [a,b,c , ...d] = colors;

console.log(a)
console.log(b)
console.log(c)
console.log(d)



