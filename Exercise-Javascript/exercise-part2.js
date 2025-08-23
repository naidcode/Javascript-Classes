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


let num = [1,2];
let num2 = [...num , 3,4,5]   //exercise 1
console.log(num2);

let obj1 = {name: "Nahid", age: 19};
let obj2 = {
   profassion: "web developer"
}


let combined = {...obj1 , ...obj2}   //exercise 2

console.log(combined);

function multiplyAll(...nums){
  return nums.reduce((a,b) => a * b, 1)   //exercise 3
}

console.log(multiplyAll(21,2));



let [first , second , ...rest ]= [100,200,300,400,500]   //exercise 4
console.log(first);
console.log(second);
console.log(rest);



function findMax(...nums) {
  return nums.reduce((a,b) => a+b, 0);   //exercise 5

}
console.log(Math.max(findMax(1,2,1,3,12,)));




let studentInfo = {
  name: "Nahid pashs",
  age: 20,

};

let student = {
  profession: "web developer",
}
let combineds ={...studentInfo , ...student};

console.log(combineds);
function showAllStudents() {
  return studentInfo;
}

showAllStudents()


let library = [
  {title: "Book A", author: "Author A"},
  {title: "Book B", author: "Author B"}
];


function viewBooks() {
  library.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} by ${book.author}`);
  });


}

viewBooks();

function searchBook(title) {
let library=   library.find()
}
