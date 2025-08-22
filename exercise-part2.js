function test() {
  if (true) {
    var x = 10;
    var y = 20;
    var z = 30;
  }
  console.log(x); // ?
  console.log(y); // ?
  console.log(z); // ?
}
test();
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

const user = {
  name: "Nahid",
  sayName() {
    console.log(this.name)
  },
  sayNameArrow (){
    console.log(this.name)
  }  //how to get output 
};
user.sayName();
user.sayNameArrow()
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
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let c1 = counter();
console.log(c1());
console.log(c1());



