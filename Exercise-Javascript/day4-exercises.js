// class Products { constructor(name){ this.name = name } }
// class Book extends Products {
//   constructor(name, pages) { 
//    super(name)
//     this.pages = pages;
//   }
// };

// class Item {
//   get total(){
//     return this.total
//   }  
// }

// class Util {
//   static toCurrency(n){ return `₹${n}`; }
// }
// console.log(Util.toCurrency(100));

// class Bank {
//   #balance = 0;
// }
// const b = new Bank();
// b.balance = 100
// console.log(b.balance);


// class Base {
//    price(p){ 
//     return p * 1.1;
//    } 
//   }

// let PP = new Base();
// console.log(PP.price(100));


// //quiz question an answer.

// //1 ans: A super() actually take method or properties from from parent class to child if we want property or method from parent class hen we use super().
// //2 ans: in static method we use directly base class to execute the output. and other side instance we want to create a variable and after we get out output.
// //3 ans: getter is a special method that make a property readable that why we use getter.
// //4 ans: private fields we use when we want to private somthing like password and otp like that.
// //5 ans: composition is functions and inheritance is use to extends child class from parent class.
// //6 ans: i will get error.
// //7 and: i will use if else statment to get control of changes.

// class Product{

//   constructor(name , price ,quantity , category){
// if (price < 0 || quantity < 0) throw new Error("Invalid values");
    
//     this.name = name,
//     this.price = price,
//     this.quantity = quantity,
//     this.category = category
//   }


//   get totalPrices(){
//   return  this.price * this.quantity
//   };

//   discount(){
//    return this.totalPrices
//   };

//   static from(data) {
//     return new Product(data.name, data.price, data.quantity);
//   }
// };

// class Electronic extends Product{
// constructor(name , price , quantity,warrentyMonths){
// super(name, price, quantity, "Electronic");
//   this.warrentyMonths = warrentyMonths
// };

// discount(){
//   return this.totalPrices * 0.95;
// };
// };

// class Grocery extends Product{
// constructor(name , price , quantity,Expiry, category){
//   super(name, price , quantity,category)
//   this.Expiry = Expiry
// };

// dicount(){
//   let total = this.totalPrices;
//   let today = new Date();
//   let diff = (this.Expiry - today) / (1000*60*60*24);
//   if (diff <= 3) {
//     total *= 0.95; // 5% off
// }
// return total;

  
// };
// }

// class Cart{
// constructor(){
//   this.Item = [];
// }
// addProduct(Product){
// if (Product.quantity === 0) throw new Error("Out of stock: cannot add zero quantity");
// this.Item.push(Product);
// };

// viewProduct(){
//   this.Item.forEach((product , index) => {
//     console.log(`${index + 1} ${product.name} ${product.price} ${product.quantity}`)
//   })
// }

// removeByName(name){
// let index = this.Item.findIndex(product => product.name === name);
// if(index !== -1){
// let remove = this.Item.splice(index , 1);
// console.log(`Product remove Succesfully` , remove[0]);
//  } 
//  else {
//     console.log("no product found");
//  }
// };

// findProduct(name){
//  this.Item.find(product => product.name === name);
//   console.log("founded the product", name);
// };

// itemByCategory(name){
//   let category = this.Item.filter(product => product.category === name);
//   if(category.length > 0){
//     console.log(`product in category ${name}` , category.map(p=> p.name));
//   }
//   else{
//     console.log("not founded in category");
//   }
// };

// get count(){
//   return this.Item.length;
// };
// get totalBeforeDiscount(){
//   return this.Item.reduce((acc , product) => acc + product.totalPrices,0);

// };

// get totalAfterDiscount() {
//   let total = this.Item.reduce((acc, product) => acc + product.discount(), 0);

//   if (total > 10000) {
//     return total * 0.80; // extra 20% off
//   } else if (total > 5000) {
//     return total * 0.90; // extra 10% off
//   }
//   return total;
// }

// };

// let cart = new Cart();

// let phone = new Electronic("iphone" , 150000, 1, 24, "Electronic" );
// let soaps = new Grocery("santoor" , 500, 10, "2025-09-05", "Grocery");
// let phone2 = new Electronic("samsung" , 130000, 1, 24 , "Electronic");
// let laptop = new Electronic("lenovo" , 80000, 1, 18 , "Electronic");
// let oven = new Electronic("LG Oven" , 20000, 1, 10 ,"Electronic");
// let rice = new Grocery("kriti" , 2500, 5, "2025-09-05" , "Grocery");
// let pulse = new Grocery("all types" , 5000, 10, "2025-09-05" , "Grocery");

// cart.addProduct(phone)
// cart.addProduct(phone2)
// cart.addProduct(laptop)
// cart.addProduct(oven)
// cart.addProduct(rice)
// cart.addProduct(soaps)
// cart.addProduct(pulse)

// cart.viewProduct();
// cart.itemByCategory("Grocery");
// cart.findProduct("samsung")
// console.log("product count:",cart.count);
// cart.removeByName("all types");
// console.log("product count:",cart.count);
// cart.viewProduct();
// console.log("total before discount:",cart.totalBeforeDiscount);
// console.log("total price after discount:",cart.totalAfterDiscount);


