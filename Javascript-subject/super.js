class Animal{
  constructor(name , age){
    this.name = name,
    this.age = age;
  }

  move(speed) {
    console.log(`${this.name} average speed is ${speed}`)
  }
};

class Lion extends Animal{
  constructor(name , age , runspeed){
    super(name, age)
    this.runspeed = runspeed
  }

  run(){
    console.log(`${this.name} can run`);
    super.move(this.runspeed)
  }
}

class Falcon extends Animal{
  constructor(name , age , flyspeed){
    super(name, age)
    this.flyspeed = flyspeed
  }

  fly(){
    console.log(`${this.name} can fly`);
    super.move(this.flyspeed)
  }
}

class Fish extends Animal{
  constructor(name , age , swimspeed){          // this super we called super constructor
    super(name, age)
    this.swimspeed = swimspeed
  }

  swim(){
    console.log(`${this.name} can swim`);
    super.move(this.swimspeed)                // for this we called super method
  }
};

let lion = new Lion("mufasa" , 14 , "25km/h")
let falcon = new Falcon("falco" , 2 , "390km/h")
let fish = new Fish("nemo" , "6 months" , "15km/h")

console.log(lion.name)
console.log(falcon.flyspeed)
console.log(fish.age);

lion.run();
fish.swim();
falcon.fly()