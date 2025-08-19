// let students = ["nahid", "pasha", "ali", "sara"];
// let name = students.map(value => {
//   return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
// })

// console.log(name);

// let numbers = [10, 25, 30, 45, 50, 65];
// let num = numbers.filter( (great) => {
//   return great > 30
// })
// console.log(num);

// let cart = [200, 150, 300, 100];
// let add = cart.reduce( (h1 , h2) => {
//   return h1 + h2
// })
// console.log(add)

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 25000 },
  { name: "Tablet", price: 15000 },
  { name: "Headphones", price: 2000 },
];

let cal = products.filter( product => product.price > 10000 )
console.log(cal);

let name = cal.map( product => product.name);
console.log(name);

let final = cal.reduce((acc , product) => acc + product.price,0)
console.log(final);
