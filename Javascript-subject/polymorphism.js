class newJoin{
  constructor(name ){
    this.name = name
  }

  title(){
    console.log(`${this.name} is my name.`);
  }
};

class Student extends newJoin{

  title(){
    console.log(`${this.name} is my name.`)   // we can use parent class methos variable object and use it as our own.
  }
}

let first = new newJoin("Nahid pasha");
let second = new Student("Fazil pasha");

first.title()
second.title()

class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

let  a = new Animal();    // first method to get ouput
let b = new Dog();

a.speak();
b.speak()


let animals = [new Animal() , new Dog()]    // second method
for (const a of animals) {
  a.speak()
}

let animals2 = [new Animal() , new Dog()]   //third method 
animals2.forEach(a => a.speak());