// function test() {
//   if (true) {
//     var x = 10;
//     var y = 20;
//     var z = 30;
//   }
//   console.log(x); // ?
//   console.log(y); // ?
//   console.log(z); // ?
// }
// test();
// var a = 5;
// var b = 5;
// console.log(a);

// console.log(b);

// sayHi();

// function sayHi() {
//   console.log("Hello!");
// }

// console.log(sayHello)

// var sayHello = function() {
//   return "Hi again!";
// };

// function example() {
//  // ?
//   let num = 10;
//     console.log(num);
// }

// example();

// nameHi()
// function nameHi() {
//    var a = 11;          //declaration function
//   console.log(a)
// }

// nameHi();

// var nam  = function () {     //function expression
//   console.log("hello")
// }
// nam()

// console.log(c)     //undefined because you runcode before the variable.
// var c = 122;

// function a() {
//   console.log("Inside A");
//   b();
// }
// function b() {
//   console.log("Inside B");
// }
// a();

// const person = {
//   name: "Nahid",
//   age: 20,
//   sayName: function() {
//     console.log(this.name); // "Nahid"

//   },
//     arrow: () => {
//       console.log(`${that.age}`)
//     },
// }

// person.sayName();
// person.arrow();

// function Namess() {
//   console.log("Hello Nahid!")   //function declaration
// }

// Namess();

// let name =  function() {
//   console.log("Hello Nahid!")   //function expression
// }

// name();

// let Sayname = namme => {
//   console.log("Hello Nahid!")   //arrow function
// }

// Sayname()

// function inner() {
//   console.log("i am inner");
//   function outer(){
//   console.log("i am outer")
// }

//   outer();
// };

// inner();

// const user = {
//   name: "Nahid",
//   sayName() {
//     console.log(this.name)
//   },
//   sayNameArrow (){
//     console.log(this.name)
//   }  //how to get output
// };
// user.sayName();
// user.sayNameArrow()
// const person = {
//   name: "Fouziya",
//   greet() {
//    setTimeout(() => {
//     console.log(`Hello ${this.name}`)
//    }, 2000);
//   }
// };
// person.greet();

// function a() {
//   console.log("Iam A");
//   b()
// }

// function b() {
//   console.log("Iam B");
//   c()
// }
// function c() {
//   console.log("Iam C");

// };

// a()

// sayHello();
// function sayHello() {
//   console.log("Hello!");
// }
// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// let c1 = counter();
// console.log(c1());
// console.log(c1());

// let x = 10;
// let y = x;   // copy value
// y = 20;
// console.log(x); // 10 (unchanged)

// let obj1 = {
//   name: "nahid pasha"
// }
// let obj2 = obj1;
// obj2.name = "Fazil Pasha"

// console.log(obj1.name);

// var a = 5;
// console.log(a)

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let combined = [...arr1, ...arr2];
// console.log(combined); // [1,2,3,4,5]

// let obj1 = {name: "Nahid", age: 19};
// let obj2 = {...obj1 , city: "Bangalore"};
// console.log(obj2); // {name:"Nahid", age:19, city:"Bangalore"}

//

// let num = [1,2];
// let num2 = [...num , 3,4,5]   //exercise 1
// console.log(num2);

// let obj1 = {name: "Nahid", age: 19};
// let obj2 = {
//    profassion: "web developer"
// }

// let combined = {...obj1 , ...obj2}   //exercise 2

// console.log(combined);

// function multiplyAll(...nums){
//   return nums.reduce((a,b) => a * b, 1)   //exercise 3
// }

// console.log(multiplyAll(21,2));

// let [first , second , ...rest ]= [100,200,300,400,500]   //exercise 4
// console.log(first);
// console.log(second);
// console.log(rest);

// function findMax(...nums) {
//   return nums.reduce((a,b) => a+b, 0);   //exercise 5

// }
// console.log(Math.max(findMax(1,2,1,3,12,)));

// let studentInfo = {
//   name: "Nahid pashs",
//   age: 20,

// };

// let student = {
//   profession: "web developer",
// }
// let combineds ={...studentInfo , ...student};

// console.log(combineds);
// function showAllStudents() {
//   return studentInfo;
// }

// showAllStudents()

// let library = [
//   {title: "Book A", author: "Author A"},
//   {title: "Book B", author: "Author B"}
// ];

// function viewBooks() {
//   library.forEach((book, index) => {
//     console.log(`${index + 1}. ${book.title} by ${book.author}`);
//   });

// }

// viewBooks();

// function searchBook(title) {
// let library=   library.find()
// }

// function add() {
//   let a = 100;

//   function addd() {
//     console.log(a)
//   }
//   return addd;
// };

// let b = add();
// b();

// let arr = [1,2,2,3,];
// let arr2 = [4,5,6];
//                              //...spread

// let final = [...arr, ...arr2];
// console.log(final);

// let  [first , ...rest] = [1,2,3,4,5];   //...rest
// console.log(first);
// console.log(rest)

// Day 1 Mini Project: Simple Calculator

// console.log("Welcome to Calculator!");

// // Wrongly written function (bug here)
// function add(num1, num2) {
//   let  result = num1 + num2;
//     console.log("Addition is: ", result);
// }

// // Expression function (bug here)
// let subtract = function(num1, num2) {
//     console.log("Subtraction is: " , num1 - num2); // issue here
// }

// // Arrow function (bug here)
// let multiply = (num1, num2) => {
//     console.log(num1 * num2);   // wrong variable used
// }

// // Hoisting test (bug here)

// var myVar = 20;
// console.log(myVar);
// // Scope test (bug here)
// function testScope() {
//     if(true) {
//         let x = 10;
//          console.log(x);
//     }

// }

// // calling functions
// add(5, 3);
// subtract(10, 4);
// multiply(3, 4);
// testScope();

// console.log("Starting Day 1 Debugging...");

// // Function declaration (bug)
// function greet(name) {

//   console.log("Hello " + name); // wrong variable
// }
// greet("nahid")

// // Function expression (bug)
// let square = function(n) {
//   return n * n; // wrong variable
// }
// square(5,12)

// // Arrow function (bug)
// let isEven = (num) => {
//   if(num % 2 === 0) { // bug here
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEven(14));

// // Scope (bug)
// function checkScope() {
//   if(true) {
//     var x = 10;
//     console.log(x);
//   }
//    // bug here
// }
// checkScope();

// function introduce(name , age) {
//   console.log("Hi, my name is" , name ,"and i'm ",  age , "year old.")
// }
// introduce("Nahid" , 20)
// function Double(num) {
//   if(num > 0) {
//     return num * 2
//   }
// }
// console.log(Double(10));

// function isAdult(age) {
//   if(age >= 18) {
//     return true
//   } else{
//     return false
//   }
// }

// console.log(isAdult(18));

// function getmax(num1 , num2) {
//   if(num1 > num2){
//     return num1
//   } else if(num2 > num1) {
//     return num2
//   } else{
//     return num1 , num2
//   }
// }

// console.log(getmax(10,20));

let students = [];

function addStudent(name, score) {
  students.push({ name, score });
}

function viewStudent() {
  students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.score}`);
  });
}

function findTopper() {
  if (students.length === 0) {
    console.log("No students yet!");
    return;
  }

  let topper = students[0];
  students.forEach((student) => {
    if (student.score > topper.score) {
      topper = student;
    }
  });
  console.log(`🏆 Topper is ${topper.name} with score ${topper.score}`);
}

function removeStudent(name) {
  let index = students.map((student) => student.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(`${name} removed successfully.`);
  } else {
    console.log(`${name} not found.`);
  }
}

// Testing
addStudent("Ali", 85);
addStudent("Nahid", 95);
viewStudent();
findTopper();
removeStudent("Ali");
viewStudent();

// BUG: wrong variable
function sayHello(person) {
  let user = person;
  console.log("Hello " + user);
}
sayHello("Nahid");

// BUG: missing return
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 4));

// BUG: implicit return missing
let isPositive = (num) => {
  return num > 0;
};
console.log(isPositive(5));

let person = {
  name: "Nahid",
  greet() {
    console.log("Hi " + this.name); // BUG here
  },
};
person.greet();

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let combined = [...arr1, ...arr2]; // BUG: should merge
console.log(combined);

function sum(a, b, ...rest) {
  return a + b, rest;
}
console.log(sum(1, 2, 3, 4, 5));

let nums = [10, 20, 30];
let a = nums[0];
let b = nums[1];
console.log(a, b); // should be 10, 20

let student = { name: "Nahid", score: 95 };
let name,
  score = student;
console.log(student.name, student.score);

function getMax(a, b) {
  if (a > b) return a;
  else b > a;
  return b;
}
console.log(getMax(10, 20));

function greet(name = "Guest") {
  console.log("Welcome " + name);
}
greet("Nahid");

let double = (n) => n * 2;
console.log(double(4));



class Product{
  constructor(name , price ,quantity){
    this.name = name,
    this.price = price,
    this.quantity = quantity
  }
  discount(){
    return this.totalPrice;
  }

  set quantity(newquantity){
    if(newquantity < 0){
      console.log(`select quantity first`);
    } 
    this._quantity = newquantity;
  }

  get totalPrice(){
return this._quantity;
  }

  get totalPrice() {
    return this.price * this._quantity;
  }

  static toCurrency(amount){
    console.log(`$${amount.toFixed(2)}`)
  };

  static from(obj){
    return Product(obj.name, obj.price, obj.quantity);
  }

  static TotalOf(Products){
    return  Products.reduce((acc , product) => acc + product.price,0);
  }
  static totalDiscount(Products){
    return new Products.reduce((acc , product) => acc + product.discount(),0);
  }
}



class Grocery extends Product{
    discount(){
     return this.totalPrice * 0.90
    }
}

class Electronic extends Product{
   discount(){
      return this.totalPrice * 0.80
    }
}

let tv = new Electronic("TV" , 50000, 1);
console.log(`tv price is: $${tv.totalPrice}`);
console.log(`tv price after discount: $${tv.discount()}`)

let soaps = new Grocery("Soaps" , 150, 15);
console.log(`soaps price is: $${soaps.totalPrice}`);
console.log(`soaps price after discount: $${soaps.discount()}`)


// Product from factory method
const apple = Product.from({ name: "Apple", price: 10, quantity: 5 });
console.log("Apple Total Price: $",apple.totalPrice);


Product.toCurrency(tv.discount())
Product.toCurrency(soaps.discount())
Product.toCurrency(apple.discount())

const item = [tv , soaps , apple];
console.log("total price before discount:",Product.toCurrency(Product.TotalOf(Product)))
console.log("total price after discount:",Product.toCurrency(Product.totalDiscount(Product)))