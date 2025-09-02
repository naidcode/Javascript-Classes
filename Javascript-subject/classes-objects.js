/* 
“Classes = Sugar over Prototype Chain”

When we say “Classes are sugar over the prototype chain”, it means:
Classes are just easier syntax to create constructor functions + prototypes.
All the prototype behavior still exists; classes don’t change how inheritance works.
Anything you can do with classes, you can do with prototypes manually.
*/
class attandence {
  constructor(studentName , rollNo) {
    console.log(this.name + this.roll)
    this.name = studentName;
    this.roll = rollNo;
  }
  present() {
    console.log(this.name + "present" + " and his roll no is " + this.roll);
  }
  absent() {
    console.log(this.name + "absent" + " and his roll no is " + this.roll);
  }ii
  

}

let nahid = new attandence("nahid is ", 10)
let shahid = new attandence("shahid is ", 12);
let sahil = new attandence("sahil is ", 35);
let fazil = new attandence("fazil is ", 13);
nahid.absent();
shahid.present();
sahil.absent();
fazil.present();

// Methods = functions inside a class (define behavior).
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;   // property
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  // Another method
  birthday() {
    // this.age += 1;
    console.log(`${this.name} is now ${this.age}!`);
  }
}

let nahid01 = new Person("nahid" , 20);

nahid01.greet()
nahid01.birthday();

// Static = belongs to class itself, not objects.
class MathHelper {
  static pi = 3.14159; // static property

  static add(a, b) {   // static method
    return a + b;
  }
}

console.log(MathHelper.pi);      // 3.14159
console.log(MathHelper.add(5,2)); // 7


/* 
Prototype

1: The fundamental mechanism of inheritance in JavaScript.
2: Every object has a prototype from which it can inherit properties and methods.
3: Methods added to ConstructorFunction.prototype are shared by all instances.
*/
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, ${this.name}`);
};


/*
Class

1: Syntactic sugar over prototypes introduced in ES6.
2: Makes object creation, methods, and inheritance cleaner and more readable.
3: Supports constructor, methods, inheritance (extends), and private fields (#).
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, ${this.name}`);
  }
}








