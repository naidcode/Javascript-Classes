// // Debug code 
// class User {
//   #age;

//   constructor(name, age) {
//     this.name = name;
//     this.setAge(age);
//   }

//   setAge(age) {
//     if (age < 0) {
//       throw new Error("Age cannot be negative");
//     }
//     this.#age = age;
//   }

//   getAge() {
//     return this.#age;
//   }
// }

// try {
//   let user = new User("John", -5);
// console.log(user.getAge());

// } catch (error) {
//   console.log(error.message)
// }

// try {
//   let validuser = new User("John", 5);
// console.log(validuser.getAge());

// } catch (error) {
//   console.log(error.message)
// }

// class Employee{
//   #salary;
//   constructor(name, salary,department){
//     this.name =  name,
//     this.department = department,
//     this.setSalary(salary);
//   };

//   getSalary(){
//     return this.#salary
//   };

//   setSalary(salary){
//     if(salary <= 0){
//       throw new TypeError("invalid salary");
//     }
//      this.#salary = salary
//   }

//   discount(){
//     return this.getSalary();
//   }
// };

// class Manager extends Employee{
//   constructor(name , salary ,department){
//     super(name, salary ,department);
//   }



//   discount(){
//     return this.getSalary() * 0.80;
//   };


// }

// class Intern extends Employee{
//   constructor(name , department , stipend){
//     super(name, department, stipend);
//     this.stipend = stipend
//   };

//   getSalary(){
//     return this.stipend;
//   }
// };

// let manager = new Manager("John Doe", 50000, "Engineering");
// let intern = new Intern("Jane Smith", "Marketing", 10000);


// console.log("Manager Salary:", manager.getSalary());           // Should print 50000
// console.log("Manager Discounted Salary:", manager.discount()); // Should print 40000

// console.log("Intern Salary:", intern.getSalary());             // Should print 10000
// console.log("Intern Discounted Salary:", intern.discount());   // Should print 10000 (no discount applied)


// // logic exercise

// let arr = [1, 2, 4, 5];

// let n =  arr.length + 1;
// for (let index = 1; index < n; index++) {
//   let found = false

//   for (let j = 0; j < arr.length; j++) {
//   if(arr[j] === index){
//     found = true;
//     break;
//   }
  
// }

// if(!found){
//   console.log("miss number is:" , index)
//   break;
// }
// };

// Another library management.

class Book{
  constructor(title, author , price , quantity, category){
    if(price <= 0 || quantity <= 0) throw new Error("invalid");
    this.title = title,
    this.author  = author,
    this.price =  price ,
    this.quantity = quantity,
    this.category = category
  };

  get totalvalue(){
    return this.price * this.quantity
  };

  discount(){
    if(this.category === "Education"){
      return this.totalvalue * 0.90
    } else if (this.category === "fiction"){
      return this.totalvalue * 0.95
    } else if (this.category === "dicipline"){
      return this.totalvalue * 0.85
    } else{
      console.log("no discount applied");
      return this.totalvalue
    }
  }
  
}

class Member{
  constructor(name , memberShipType = "regular"){
    this.name = name;
    this.memberShipType = memberShipType,
    this.borrowBook = 0;
  };

  getMaxBorrow(){
    return this.memberShipType === "primium" ? 5: 2 
    }
  }
class Library {
  #books = [];

  static fromSeed(arrayseed){
    let library = new Library()
    arrayseed.forEach(b => library.addBooks(b));
    return library;
  }

  addBooks(book){
    this.#books.push(book)
  };

  listBooks(){
    this.#books.forEach((book , index) => {
      console.log(`${index + 1} - ${book.title} ${book.author} ${book.price} ${book.quantity} ${book.category}`)
    })
  }
  searchBooks(title){
    return this.#books.filter(book => book.title === title);
  };
get TotalBeforeDiscount(){
    return this.#books.reduce((acc , book) => acc + book.totalvalue,0);
  }

  get TotalAfterDiscount(){
    return this.#books.reduce((acc, book) => acc + book.discount(),0);
  }


MemberBorrow(title , Member){
  let book = this.searchBooks();
  if(!book) {
    throw new Error("invalid book")
  } 
  if(book.quantity <= 0){
    throw new Error("invaid quantity");
  }
  if(Member.borrowBook >= Member.getMaxBorrow()){
    throw new Error("you reached the books limit");
  }

  book.quantity = -1;
  Member.borrowBook = +1
  console.log(`${title} - ${Member.name}`);
}
}

class Payment{
  pay(amount) {
    throw new Error("invalid payment method");
  }
};

class Credit extends Payment{

  pay(amount){
    console.log(`use Credit card for payment is ${amount}`)
  }
} 

class UPI extends Payment{

  pay(amount){
    console.log(`use UPI for payment is ${amount}`)
  }
} 

class Wallet extends Payment{

  pay(amount){
    console.log(`use Cash for payment is ${amount}`)
  }
};


let seedBooks = [
  new Book("Maths 101", "John Doe", 200, 3, "Education"),
  new Book("Laptop Basics", "Tech Guru", 50000, 2, "fiction"),
  new Book("Learn JS", "Code Master", 300, 5, "Education")
];

let library = Library.fromSeed(seedBooks);

let member1 = new Member("Alice", "regular");  
let member2 = new Member("Bob", "premium");  

library.MemberBorrow("Maths 101", member1);  
library.MemberBorrow("Learn JS", member1);    
library.MemberBorrow("Laptop Basics", member2);  

library.MemberBorrow("Laptop Basics", member2); 
library.MemberBorrow("Maths 101", member2);     

library.listBooks(); 
console.log(`total price before discount: $${library.TotalBeforeDiscount}`)
console.log(`total price after discount: $${library.TotalAfterDiscount}`)  

let payments = new Credit();
payments.pay(library.TotalAfterDiscount)
console.log(member1, member2);