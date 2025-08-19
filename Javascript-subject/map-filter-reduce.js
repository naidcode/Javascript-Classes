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