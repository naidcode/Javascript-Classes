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
    console.log(" monkey eat Banana")
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
  leaveRequest(){
    super.leaveRequest(4)
    // console.log(`i wnat ${days - 1} days leave`)
  }
};


let e = new employee();

e.leaveRequest();

//another exercise of inheritance.

class animal{
  alive = true;

  eat() {
    console.log(`this ${this.name} is eating`)
  }

  sleep() {
    console.log(`this ${this.name} is sleeping`)
  }
};

class Rabbit extends animal{
  name = "rabbit"

  carrot(){
    console.log(`this ${this.name} is eating carrot`)
  }
};

class RAt extends animal{
  name = "rat";
  peanuts(){
    console.log(`this ${this.name} is eating peanuts`)
  }
};

class Bear extends animal{
  name = "bear";

  fish(){
    console.log(`this ${this.name} is eating fish`)
  }
};
const rabbits = new Rabbit();
const rat = new RAt();
const bear = new Bear();


console.log(bear.alive);
bear.eat();
bear.sleep();
bear.fish()
