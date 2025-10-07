// //array map method
// let ar = ["nahid", "fazil","shahid"];

// let ar1 = ar.map( name => {
//    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
// })

// console.log(ar1);

// //array filter method
// let arr = [21,25,50,0,10];
//  let ar2 = arr.filter( (b) => {
//    return b <= 10
//    ;
// })
// console.log(ar2)

// //array reduce method
// let arrr = [21,25,50,0,10];
//  let ar3 = arrr.reduce( (h1 , h2) => {
//    return h1 + h2
//  })
//  console.log(ar3)

//  let names = ["Ali", "Sam", "Zoya"];
// names.forEach((n, i) => {
//   console.log(i, n);
// });

// let expenses = [200, 600, 150, 800];
// for (let i = 0; i < expenses.length; i++) {
//   if (expenses[i] > 500) break; // stop early
//   console.log(expenses[i]);
// }
// expenses.forEach(e => console.log("Expense:", e));

// let doubled = expenses.map(e => e * 2);
// console.log(doubled); // [400, 1200, 300, 1600];

//From here we do our arrays every single method.

let number = [1, 2, 3, 45, 6, 34, 35, 35];
let number2 = [11, 12, 13, 14, 15, 16, 17];
let number3 = [1, 21, 3, 4, 56, 7, 9, 10, 20, 30, 40];
let number4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let letter = ["b", "a", "d", "c"];
let obj = [
  { name: "fazil", id: -1 },
  { name: "nahid", id: 2 },
  { name: "nahid", id: 3 },
  { name: "nahid", id: 4 },
  { name: "nahid", id: 5 },
];
let obj2 = ["apple", "banana", "cat"];
let obj3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let a = number.toString(); //make array element into string
// console.log(a);

// let b = number.join("-"); // join anything between the array element
// console.log(b);

// let bb= number.push(20); //push return new element in array  at last
// console.log(bb);
// console.log(number)

// let c = number.shift(); //shift remove first element from array  from start
// console.log(c);
// console.log(number);

// let e = number.unshift(100); //add element inthe starting of the array  from start
// console.log(e);  //this just counter the element from the array
// console.log(number);

// // delete number[0];   //delete the element from array by using index [];
// // console.log(number)

// let f = number.concat(number2, letter); //use to join array to the given array
// console.log(f);

let g = letter.sort(); // sort all element fron the array.
console.log(g);

let zzz = ["a" , "d" , "b" , "c"].sort()
console.log(zzz)

// let h = number2.reverse(); //reverse the element of the array.
// console.log(h);

// //splice we can use to add new element in the array.
// let i = number3.splice(1, 0, 100, "added");
// console.log(number3);

// let j = number3.slice(3, 7); //slice out a piece from an array and create a new array.
// console.log(j);

// let k = obj.find((item) => item.name === "nahid");  //find() find element from array from start position
// console.log(k.name),
// console.log(k.id);

//    //some() array method show value is true or false. atleast one element pass the test.
// let l = obj3.some((item) => item > 1);
// console.log(l);

// let m = obj3.every( (i) => i < 10);  //in  this array method every element should match. it shows true other vise shows false.
// console.log(m)

// map() method. map() create a new array by performming some operator on each element.
let n = number4.map((item) => {
  console.log(item);
  return item + 1;
});
console.log(n);
// filter() method. filter() an arrays with values that passes a test create a new array.
let number5 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let o = number5.filter((item) => {
  return item < 13;
});
console.log(o);
// reduce method. reduce an array from diffrent value
let number6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let p = number6.reduce((a, b, c) => {
  return a + b + c;
});
console.log(p);

//we can send function into variable. reduce() we use like this also.
let number7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let func = (a, b, c) => {
  return a + b + c;
};
let q = number7.reduce(func);
console.log(q);

console.log(number.includes(2))   //includes check arrays element is their or not in tell in true and flase.

// let z = number.pop();
// console.log(number);
// console.log(z); //remove last element from the array
