function declaration() {
  console.log("Hello from function Declaration")
}
declaration();

let expression =function  () {
  console.log("hello from expression")
}

expression();

let arrowFunction =  () => {
  console.log("Hello from arrow function")
}

arrowFunction();

let person = {
  name: "Nahid pasha",

  sayName() {
    console.log(`${this.name}`)
  },
  sayNamearrow: () => {
    console.log(`${this.name}`)   //note if we remove the function arrow then the output will come perfect.
  }
}

person.sayName();
person.sayNamearrow();

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let mycounter = counter();
mycounter();
mycounter()
mycounter()
mycounter();


function a() {
  console.log("stage A first");
  b();
    console.log("stage A last");
}
function b() {
  console.log("stage b first");
  c()
    console.log("stage b last");
}
function c() {
  console.log("stage c first");
  d()
    console.log("stage c last");
};
function d() {
  console.log("stage d first");
    console.log("stage d last");
};

a()


