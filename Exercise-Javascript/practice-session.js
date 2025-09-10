function count() {
  let count = 1;
  console.log(count)
};
count();

{
  let name =  "nahid"   // ye i see the error because this is a block scope
  
}
// console.log(name);

let outer = "i am outer";

function outers(){
  console.log(outer)
};

outers()

let inside = "nahid pasha";
console.log(`hi ${inside}`);

let multiple = `hello my name is nahid pasha 
and i want to become a web developer`;
console.log(multiple)

let username = "nahid pasha";
let userage = 20;

console.log(`user name is ${username} and is age is ${userage}`)

let number = (a,b) =>  a + b;
console.log(number(20,30));

let user = {
  name: "nahid pasha",
  age: 20
};

let {name , age} = user;
console.log(name, age);
  
let array = ["nahid" , 20, "learning"]
let [first , second] = array;
console.log(first , second)

let fruit = ["apple"  ];
let fruits = ["banana"]
console.log(...fruit, ...fruits);

let students = {name: "nahid"}
let studentage = { age: 20};
let combined = {...students, ...studentage}
console.log(combined);

function sub(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total -= number
  }
  return total
};

let users = {
  name: "Nahid",
  age: 20
};
// let numbers = [1, 2, 3, 4, 5];
// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index];
//   console.log(element* 2)
  
// }

// let names = ["Alice", "Bob", "Charlie"];
// for (const value of names) {
//   console.log(`hello ${value}`)
// };

// let userss = { name: "Alice", age: 25, city: "Paris" };
// for (const key in userss) {
//   if (Object.prototype.hasOwnProperty.call(userss, key)) {
//     key, userss[key] ;
//     console.log(key , userss[key])
    
//   }
// }
let studentz = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 }
];
let maxScore = 0
for (let index = 0; index < studentz.length; index++) {
  if(studentz[index].score > maxScore){
    maxScore =  studentz[index].score 
  }

  
}
 console.log(`highest score is ${maxScore}`)

for (const value of studentz) {
  if(value.score > 80){
    console.log(value.name)
  }
}

for (const key in studentz[0]) {
  if (Object.prototype.hasOwnProperty.call(studentz[0],[key])) {
    console.log(studentz[0][key])
    
  }
}

for (let index = 1; index <= 20; index++) {
  if(index % 2 ===0)
  console.log(index)
};

let num2 = [3, 7, 2, 9, 4];
let sum1  = 0;
for (let index = 0; index < num2.length; index++) {
sum1 += num2[index]
}

console.log(sum1)


