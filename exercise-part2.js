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


function a() {
  console.log("Inside A");
  b();
}
function b() {
  console.log("Inside B");
}
a();

const person = {
  name: "Nahid",
  sayName: function() {
    console.log(this.name); // "Nahid"
  },
  arrow: () => {
    console.log(this.name); // ❌ undefined (lexical this)
  }
};

person.sayName();
person.arrow();




