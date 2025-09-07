// debugging exercise 
class Animal {
  speak() {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");                              // debug completed.
  }
}

let animals = [new Animal(), new Dog()];
animals.forEach(a => a.speak());


//mini exercise 
// shape polymorphism 

class Shape{

  area(){
    throw new Error("invalid area!");
    
  }
};

class Circle extends Shape{
  constructor(r){
    super();
    this.r = r
  }
  area(){
    return this.r * this.r
  }
}

class Square extends Shape{
    constructor(side){
    super();
    this.side = side
  }
  area(){
    return this.side * this.side
  }
}

class Triangle extends Shape{
   constructor(angle){
    super();
    this.angle = angle
  }
  area(){
  return  this.angle * this.angle
  }
}

let shapes = [new Circle(5), new Square(4), new Triangle(3)];

for (const s of shapes) {
 console.log( s.area())
}


// payment Abstraction

class Payments{
  pay(amount){
    throw new Error("implement this pay() in subclass ");
    
  }
}

class Credits extends Payments{
  pay(amount){
    console.log(`the credit amount is: $${amount}`)
    
  }
}
class UPIs extends Payments{
  pay(amount){
    console.log(`the UPI amount is: $${amount}`)
    
  }
}
class Wallets extends Payments{
  pay(amount){
    console.log(`the Wallet amount is: $${amount}`)
    
  }
};

let payment = [new Credits(), new UPIs(), new Wallets()];

payment.forEach(p => p.pay(1000));

// final E-Commerce porject.

class Product{
  constructor(name , price ,quantity , category){
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.category = category;
  }

  get totalValue(){
    return this.price * this.quantity;
  };

  discount(){
    return this.totalValue;
  }
};

class Electronic extends Product{

  discount(){
    return this.totalValue * 0.90;
  }
}

class Grocery extends Product{

  discount(){
    return this.totalValue * 0.80;
  }
}

class Clothing extends Product{

  discount(){
    return this.totalValue * 0.85;
  }
};


class Cart{
  #item = [];

  addProduct(product){
    this.#item.push(product);
  };

  removeProduct(name){
    let index = this.#item.findIndex(product => product.name === name);
    if(index !== -1){
      let remove = this.#item.splice(index , 1);
      console.log(`product remove successfully ${name}`);
    };
  }

  get TotalBeforeDiscount(){
    return this.#item.reduce((acc , product) => acc + product.totalValue,0);
  }

  get TotalAfterDiscount(){
    return this.#item.reduce((acc, product) => acc + product.discount(),0);
  }
};

class Payment{
  pay(amount){
    throw new Error("implement this pay() in sub classes");
    
  }
};

class Credit extends Payment{
  pay(amount){
   console.log(`pay by credit card the amount is $${amount}`)
    
  }
}

class UPI extends Payment{
  pay(amount){
   console.log(`pay by UPI the amount is $${amount}`)
    
  }
}

class Wallet extends Payment{
  pay(amount){
   console.log(`pay by Cash the amount is $${amount}`)
    
  }
};


let product1 = new Electronic("Tv" , 50000, 1, "Electronic");
let product2 = new Grocery("rice" , 10000, 5 , Grocery);
let product3 = new Clothing("full outfit" , 20000, 2, "clothing");

let cart = new Cart();
cart.addProduct(product1)
cart.addProduct(product2)
cart.addProduct(product3);

console.log(`total price before discount: ${cart.TotalBeforeDiscount}`)
console.log(`total price after discount: ${cart.TotalAfterDiscount}`)

let payments = new Credit();
payments.pay(cart.TotalAfterDiscount)

// logic question 

let arr = [10,20,5,20,10];


let unique = arr.