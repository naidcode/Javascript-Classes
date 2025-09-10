// function count() {
//   let count = 1;
//   console.log(count)
// };
// count();

// {
//   let name =  "nahid"   // ye i see the error because this is a block scope
  
// }
// // console.log(name);

// let outer = "i am outer";

// function outers(){
//   console.log(outer)
// };

// outers()

// let inside = "nahid pasha";
// console.log(`hi ${inside}`);

// let multiple = `hello my name is nahid pasha 
// and i want to become a web developer`;
// console.log(multiple)

// let username = "nahid pasha";
// let userage = 20;

// console.log(`user name is ${username} and is age is ${userage}`)

// let number = (a,b) =>  a + b;
// console.log(number(20,30));

// let user = {
//   name: "nahid pasha",
//   age: 20
// };

// let {name , age} = user;
// console.log(name, age);
  
// let array = ["nahid" , 20, "learning"]
// let [first , second] = array;
// console.log(first , second)

// let fruit = ["apple"  ];
// let fruits = ["banana"]
// console.log(...fruit, ...fruits);

// let students = {name: "nahid"}
// let studentage = { age: 20};
// let combined = {...students, ...studentage}
// console.log(combined);

// function sub(...numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total -= number
//   }
//   return total
// };

// let users = {
//   name: "Nahid",
//   age: 20
// };
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
// // for (const key in userss) {
// //   if (Object.prototype.hasOwnProperty.call(userss, key)) {
// //     key, userss[key] ;
// //     console.log(key , userss[key])
    
// //   }
// // }
// let studentz = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 68 }
// ];
// let maxScore = 0
// for (let index = 0; index < studentz.length; index++) {
//   if(studentz[index].score > maxScore){
//     maxScore =  studentz[index].score 
//   }

  
// }
//  console.log(`highest score is ${maxScore}`)

// for (const value of studentz) {
//   if(value.score > 80){
//     console.log(value.name)
//   }
// }

// for (const key in studentz[0]) {
//   if (Object.prototype.hasOwnProperty.call(studentz[0],[key])) {
//     console.log(studentz[0][key])
    
//   }
// }

// for (let index = 1; index <= 20; index++) {
//   if(index % 2 ===0)
//   console.log(index)
// };

// let num2 = [3, 7, 2, 9, 4];
// let sum1  = 0;
// for (let index = 0; index < num2.length; index++) {
// sum1 += num2[index]
// }

// console.log(sum1)


// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} x ${j} = ${i*j}`);
//   }
// }

let nums11 = [5, 10, 15];
let totalll = 0;
for (const value of nums11) {
  totalll += value
}
console.log(totalll)

let nums = [2, 4, 6];
for (let index = 0; index < nums.length; index++) {
  const element = nums[index];
  console.log(element * 2)
  
};

let names = ["Alice", "Bob"];
for (const vlaue of names) {
  console.log(vlaue.toUpperCase())
  
};

let usersss = { name: "Alice", age: 25 };
for (const key in usersss) {
  if (Object.prototype.hasOwnProperty.call(usersss, key)) {
    console.log(key)
    
  }
};

let arr = [1, 2, 3, 4];
for (let index = arr.length -1; index >= 0; index--) {
  const element = arr[index];
  console.log(element)
};

let nums1 = [5, 8, 12, 3, 7];
for (const value of nums1) {
  if(value % 2 === 0){
     console.log(value)
  }
 
};

let expenses = { rent: 1000, food: 500, travel: 300 };
let total = 0;
for (const key in expenses) {
   total += expenses[key]
  
  }

 console.log(total)

 let fruits = ["apple", "banana", "cherry"];
for (const key in fruits) {
 console.log(key +fruits[key])
    
  }

  let arr1 = [5, 12, 20, 8];
for (let index = 0; index < arr1.length; index++) {
if(arr1[index] > 10){
  console.log(arr1[index])
}
  
}

 let str = "hello";
for (const value of str) {
  if(value){
    console.log( true);
  }
  };

  let arr2 = [[1,2],[3,4],[5,6]];
  let max = arr2[0][0];

  for (let index = 0; index < arr2.length; index++) {
    for (let index1 = 0; index1 < arr2[index].length; index1++) {
      if(arr2[index][index1] > max) max = arr2[index][index1]
    }
  
  }
  console.log(max)
 
let words = ["hi","hello"];
let total2 = 0
for (const value of words) {
  total2 += value.length
}

console.log(total2)

let users = [{name:"Alice",age:25},{name:"Bob",age:30}];
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  console.log(users[i])
  
}