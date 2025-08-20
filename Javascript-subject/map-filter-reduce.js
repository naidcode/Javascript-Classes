//array map method
let ar = ["nahid", "fazil","shahid"];

let ar1 = ar.map( name => {
   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
})

console.log(ar1);

//array filter method
let arr = [21,25,50,0,10];
 let ar2 = arr.filter( (b) => {
   return b <= 10
   ;
})
console.log(ar2)

//array reduce method
let arrr = [21,25,50,0,10];
 let ar3 = arrr.reduce( (h1 , h2) => {
   return h1 + h2
 })
 console.log(ar3)

 let names = ["Ali", "Sam", "Zoya"];
names.forEach((n, i) => {
  console.log(i, n);
});


let expenses = [200, 600, 150, 800];
for (let i = 0; i < expenses.length; i++) {
  if (expenses[i] > 500) break; // stop early
  console.log(expenses[i]);
}
expenses.forEach(e => console.log("Expense:", e));

let doubled = expenses.map(e => e * 2);
console.log(doubled); // [400, 1200, 300, 1600]
