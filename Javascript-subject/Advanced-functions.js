// setTimeout(() => {
//   console.log("fazilpasha")
//   console.log("nahid pasha")  /*this function work after how time you set i set 3000. 
//                                 // 3000 mean 3s after 3s the code will run */
// }, 3000);

// console.log("Next line")  //this line will run first because he will never wait 3s for run.


// [
// "dishes",
// 'wash',
// "night"
// ].forEach((value , index) => {
//   if (value === "dishes") {   // easy way to code break
//     return;
//   }

//   console.log(value)
// })
// let nahid =  () => {   //arrow function syntax
//   console.log("hello")
// }

// let hello = function() {    //expression function
// console.log("hello")
// };

// function hell(name = "hi nahid!") {   //declaration function  
// console.log( name)
// }

// hell();
// nahid()
// hello()


// function Name(a,b) {   // this how we return the values in functions
//   return a+b;
// }

// let add = Name(2 ,4);
// console.log(add);

// function composition
// let add = (x) => x + 10;
// let multi = (a) => a * 5;

// let combine = (b) => multi(add(b));
// console.log(combine(5));



// console.log(a);
// add("fazil")
// function add(name){
// let a = "hi";
// console.log(a , name);   // function is a function scope.
// }

// let a = "hello";
// console.log(a)

// add("nahid");

// // console.log(b)
// {
//   var b = 20;   //var is global function.
// }
// console.log(b);

// // let and const this two are block scope.
// {
//   const c = 15;
//   console.log(c)

// }
//   // console.log(c);


// closure

// function outer() {
//   let message = 10;
  
//   function inner() {
//     console.log(message)
//   }
//   inner()
// }

// outer();

function hello(a,b,call) {    //higher oreder function and callback
  let result = a+b;
  call(result );

  return () => {
    console.log(result);
  }
};

let everything = hello(10 , 20 ,() => {
  // console.log((val));
});
everything();






 

