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

let colors = ["red", "green", "blue", "white", "black"];
[colors[1], colors[2]] = [colors[2], colors[1]];

console.log(colors);

// ------- EXAMPLE 2 -------
// ASSAIN ARRAY ELEMENT TO VARIABLES

let [a, b, c, ...d] = colors;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//------- EXAMPLE 3 ------
// EXTRACT VALUES FROM OBJECTS

let person1 = {
  firstName: "Nahid",
  lastName: "pasha",
  age: 20,
};
let person2 = {
  firstName: "fazil",
  lastName: "pasha",
  age: 23,
  job: "sales man",
};
let { firstName, lastName, age, job } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//------- EXAMPLE 4 ------
// DESTRUCTURE FUNCTION PARAMETERS
function displayPerson({ firstName, lastName, age, job = "unemploed" }) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

let person3 = {
  firstName: "Nahid",
  lastName: "pasha",
  age: 20,
};
let person4 = {
  firstName: "fazil",
  lastName: "pasha",
  age: 23,
  job: "sales man",
};

displayPerson(person4);

// SPREAD OPERATOR

let numbers = [1, 2, 3, 4, 5, 6];
let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(min);
console.log(max);

let names = ["nahid", "fazil", "shahid", "sahil"];
let lastname = ["pasha", "khan", "syed", "md"];

let everything = [...names, ...lastname, "fouzi", "nasreen"];

console.log(everything);

let name = "nahid";
let agee = 20;

let person = { name, age, class: "first year degree" };
console.log(person);
