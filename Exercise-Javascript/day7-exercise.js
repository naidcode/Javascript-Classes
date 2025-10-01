// class Book{
//   #quantity;
//   constructor(title, price , quantity,category){
//     this.title = title,
//     this.price = price,
//     this.quantity = quantity,
//     this.category =category;
//   }

//   getQuantity(){
//     return this.#quantity;
//   };

//   setQuantity(newQuantity){
//     if(newQuantity <= 0){
//       throw new Error("invalid");
//     }
//      this.#quantity = newQuantity;
//   };

//   get totalValue(){
//     return this.price  * this.quantity;
//   };

//   discount(){
//     if(this.category === "Education"){
//       return this.totalValue * 0.80;
//     } else if (this.category === "fiction"){
//       return this.totalValue * 0.85;
//     } else{
//       console.log("no discount");
//       return this.totalValue;
//     }
//   };
// }

// class Member {
//   #borrowCount
//   constructor(name, memebershipType = "regular"){
//     this.name =  name,
//     this.memebershipType = memebershipType,
//     this.borrowCount = 0;
//   };

//   getBorrowCount(){
//     return this.#borrowCount
//   };

//   setBorrowCount(newBorrowCount){
//     if(newBorrowCount <=0){
//       throw new Error("invalid");
//     }
//     this.#borrowCount = newBorrowCount;
//   };
//   getMaxBorrow(){
//     return this.memebershipType === "premium" ? 5:2;
//   };
// };

// class Library{
//   #books = [];

//   static fromSeed(seedarray){
//     let library = new Library()
//     seedarray.forEach(b => library.addBooks(b));
//     return library;
//   }

//   addBooks(book){
//     this.#books.push(book);
//   };

//   listBooks(){
//     this.#books.forEach((b , i) => {
//       console.log(`${i +1} ${b.title} ${b.price}${b.quantity}${b.category}`);
//     })
//   };

//   searchBooks(title){
//     return this.#books.filter(b => b.title === title);
//   };

//  borrowBook(title, member){
//   let book = this.searchBooks(title);
//   if(book.length === 0){
//     throw new Error("Invalid book");
//   }
//   let b = book[0];
//   if(b.getQuantity() <= 0){
//     throw new Error("Invalid quantity");
//   }
//   if(member.getBorrowCount() >= member.getMaxBorrow()){
//     throw new Error("You reached borrow limit");
//   }
//   b.setQuantity(b.getQuantity() - 1);
//   member.setBorrowCount(member.getBorrowCount() + 1);
//   console.log(`${title} borrowed by ${member.name}`);
// }

//   returnBooks(title, member){
//   let book = this.searchBooks(title);
//   if(book.length === 0){
//     throw new Error("Book not found");
//   }
//   let b = book[0];
//   if(member.getBorrowCount() <= 0){
//     throw new Error("No books to return");
//   }
//   b.setQuantity(b.getQuantity() + 1);
//   member.setBorrowCount(member.getBorrowCount() - 1);
//   console.log(`${title} returned by ${member.name}`);
// }


// hasBorrowed(title , member){
//     let book = this.searchBooks(title)
//     if(book.length > 0){
//       return true
//     } else if(!book){
//       throw new Error("not found!");
//     };

//     console.log(`${title} ${member.name}`);
//   };

//   get beforDiscount(){
//     let total = this.#books.reduce((acc , b) => acc + b.totalValue,0);
//     console.log(`total price before discount ${total}`)
//   };
//   get afterDiscount(){
//     let total = this.#books.reduce((acc , b) => acc + b.discount(),0);
//     console.log(`total price after discount ${total}`)
//   }
// };


// class Payment{
//   pay(amount){
//     throw new Error("invalid");
    
//   }
// };

// class Credit extends Payment{
//   pay(amount){
//     console.log(`use Credit card for payment and the amount is: ${amount}`)
//   }
// }

// class UPI extends Payment{
//   pay(amount){
//     console.log(`use UPI for payment and the amount is: ${amount}`)
//   }
// }

// class Wallet extends Payment{
//   pay(amount){
//     console.log(`use Wallet for payment and the amount is: ${amount}`)
//   }
// };


// let seedBooks = [
//   new Book("harryPotter" , 500,1,"fiction"),
//    new Book("clean code" , 1000,1,"Education"),
//     new Book("selftaught" , 1500,1,"discipline"),
//      new Book("harryPotter2" , 2000,2,"fiction")
// ]

// let library = Library.fromSeed(seedBooks);

// let member1 = new Member("nahid" , "regular");
// let member2 = new Member("fazil" , "premium");

// library.borrowBook("harryPotter", member1);  
// library.borrowBook("clean code", member1);    
// library.borrowBook("selftaught ", member2);

// library.borrowBook("harryPotter2", member2); 
// library.borrowBook("clean code", member2);

// library.listBooks();
// console.log(library.searchBooks("harryPotter"));

// console.log(searchBooks("founded book:",`harryPotter`));
// console.log(`total price before discount: $${library.beforeDiscount}`)
// console.log(`total price before discount: $${library.afterDiscount}`);

// library.returnBooks("harryPotter", member1);
// library.hasBorrowed("harryPotter", member1);


// let payment = new Wallet();
// payment.pay(library.afterDiscount);
// console.log(member1 , member2)



class BankAccount {
  #balance; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('Invalid deposit amount');
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return this.#balance;
    }
    throw new Error('Insufficient balance or invalid amount');
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
account.withdraw(2);
console.log(account.getBalance()); // 998
// console.log(account.#balance); // SyntaxError: Private field


class Person {
  #age;
  #name;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value >= 0) {
      this.#age = value;
    }  
      else{
        throw new TypeError('Invalid age');
      }
    
  }
get name(){
  return this.#name
}
  
  set name(value){
    if(value === "Nahid"){
      this.#name = value;
    } 
    else{
      throw new Error("invalid name");
      
    }
  }
}

const person = new Person("Alice", 20);
console.log(person.age);
console.log(person.name) // 30
person.age = 35;
 // works fine
// person.age = -5; // Error: Invalid age


//polymorphism exercise 

class Payment {
  process(amount) {
    throw new Error("Method not implemented");
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment extends Payment {
  process(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

function checkout(paymentMethod, amount) {
  paymentMethod.process(amount);
}

const credit = new CreditCardPayment();
const paypal = new PayPalPayment();

checkout(credit, 100);
checkout(paypal, 200);


class Vehicle {
  #fuel;

  constructor(speed, fuel){
    this.speed = speed;
    this.#fuel = fuel;
  }

  start(){
    console.log("Vehicle started!");
  }

  stop(){
    console.log("Vehicle stopped!");
  }

  set fuel(value){
    if(value < 0){
      throw new Error("Low fuel!");
    }
    this.#fuel = value;
  }

  get fuel(){
    return this.#fuel;
  }
}

class Car extends Vehicle {
  start(str){
    console.log(`Car is started with ${str}`);
  }

  stop(){
    console.log("Car stopped");
  }
}

class Bike extends Vehicle {
  start(str){
    console.log(`Bike is started with ${str}`);
  }

  stop(){
    console.log("Bike stopped");
  }
}

class Truck extends Vehicle {
  start(str){
    console.log(`Truck is started with ${str}`);
  }

  stop(){
    console.log("Truck stopped");
  }
}

function vehicleMethod(vehicle, str){
  vehicle.start(str);
}

// Creating instances
let car = new Car(50, 100);
let bike = new Bike(40, 50);
let truck = new Truck(30, 200);

// Using the methods
vehicleMethod(car, "50 km/h");
car.stop();

vehicleMethod(bike, "40 km/h");
bike.stop();

vehicleMethod(truck, "30 km/h");
truck.stop();
