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


// Inheritance and extend 

class Animal {
constructor(name , age) {
this.name = name;
this.age = age;
}

aniName() {
  console.log(`this animal name is ${this.name}`)
}
aniAge() {
  console.log(`and his age is ${this.age}`)
}
};

class monkey extends Animal {
  eatBanana() {
    console.log("eat Banana")
  }
}

class Lion extends Animal {
  eatMeat(animal) {
    console.log(`eat the ${animal} meat`)
  }
}

let tiger = new Animal("Tiger" , 16);
let cat = new monkey("Dolly" , "6 Months");
let lion = new Lion("Lion" , 80);

tiger.aniName();
tiger.aniAge();
cat.aniName();
cat.aniAge();
cat.eatBanana();
lion.aniName();
lion.aniAge()
lion.eatMeat("Deer");


class programmer {
  constructor(){
    console.log("hello employee")
  }
  leaveRequest(days){
    console.log(`i wnat ${days} days leave `)
  }
}

class employee extends programmer{
  leaveRequest(days){
    super.leaveRequest(4)
    // console.log(`i wnat ${days - 1} days leave`)
  }
};


let e = new employee();

e.leaveRequest();

//getter and setter

class student{
  constructor(name){
    this.name = name
  }

  presents(){
        console.log(`i'm a student`);

  }

  get name(){
  return  this._name 
  }

  set name(newNmae){
    this._name = newNmae
  }

};

let stu  = new student("nahid");
stu.presents();
console.log(stu.name);
stu.name = "fazil";
console.log(stu.name);




