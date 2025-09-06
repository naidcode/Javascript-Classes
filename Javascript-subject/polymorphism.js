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