// let student = {
//   name: 'nahid pasha',
//   age: 20,
//   isstudent: true
// }

// console.log(student);

// let num1 = 10;
// let num2 = 20;

// console.log(num1 + num2)

// let marks = 85;

// if (marks >= 90) {
//   console.log('A grade')
// } else if (marks >= 75) {
//   console.log('B grade')
// } else if (marks >= 50) {
//   console.log('C grade ')
// } else {
//   console.log('Fail')
// }


// let name = 'nahid';
// let age = 20;
// let height = 170;

// console.log(`hi my name is ${name} and my age is ${age} and my height is ${height} cm`)

// let num1 = 10;
// let num2 = 5;

// let sum = num1 + num2;
// let division = num1 / num2;
// let sub = num1 - num2;
// let multi = num1 * num2 ;
// let percentage = num1 % num2;

// console.log(`sum: ${sum}`)
// console.log(`sum: ${division}`)
// console.log(`sum: ${sub}`)
// console.log(`sum: ${multi}`)
// console.log(`sum: ${percentage}`)

// let age = 15;

// if (age >= 0 && age < 12){
//   console.log('Child')
// } else if (age >= 13 && age < 19) {
//   console.log("Teenager")
// } else if (age >= 20 && age < 59) {
//   console.log("Adult")
// } else if (age > 60) {
//   console.log('Senior')
// } else {
//   console.log("Senior citizen")
// }

// let name = 'Muhee';
// let pincode = '2006';

// let username = 'Muheed';
// let userpincode = '2006';

// if (username === name && userpincode === pincode){
//   console.log('succesfully login!')
// } else {
//   console.log('invalid')
// }


// let price = 500;
// let quantity = 5;

// let total = price * quantity;

// if (total >= 500){
//   let discount = total *0.10;
//   let finalprice = total - discount;
//   console.log(`total ${total}`)
//   console.log(`after discount ${discount}`)
//   console.log(`final price is: ${finalprice}`);
// } else {
//   console.log(`no discount price is less than 500 total is : ${total}`)
// }

// let balance = 5000;
// let withdrawAmount = 5000;


// if (withdrawAmount <= 0) {
//   console.log('invalid withdrawal amount');
// } else if (withdrawAmount <= balance) {
//   console.log(`withdrawal successful. Remaining balance: ₹${balance - withdrawAmount}`);
// } else {
//   console.log('insufficient balance');
// }

// let tempreture = 98.6;
// let unit = 'F';

// if (unit ==='C'){
// let fehrenheit = (tempreture * 5/9)+ 32;
// console.log(`${fehrenheit}`)
// } else if (unit === 'F'){
//   let celcius = (tempreture - 32) * 5/9;
//   console.log(`${celcius}`)
// } else {
//   console.log('invalid tempreture');
// }


// let number = 0;

// if (number > 0) {
//   console.log('Positive')
// } else if (number < 0) {
//   console.log('negative')
// }  else{
//   console.log('Zero')
// }

// let a = 25;
// let b = 150;
// let c = 4000;


// if (a >= b && a >= c) {
//   console.log(`${a} is the largest number`);
// } else if (b >= a && b >= c) {
//   console.log(`${b} is the largest number`);
// } else {
//   console.log(`${c} is the largest number`);
// }
//  //the largest number is c output

// let year = 1900;

// if (year % 400 === 0) {
//   console.log('leap year')
// } else if (year % 100 === 0){
//   console.log('not a leap year')
// }  else if (year % 4 === 0) {
//   console.log('leap year')
// } else{
//   console.log('not a leap year')
// }
// //not a leap year output


// let num1 = 10;
// let num2 = 5;
// let op = '+';

// switch (op) {
//   case '+':
//     console.log(num1 + num2)
//     break;
//   case '-':
//     console.log(num1 - num2);
//     break;
//   default:
//     console.log('invalid operator')
//     break;
// }  //output is 15

// let user = {
//   name: 'Nahid Pasha',
//   age: 20,
//   isMember: true
// }

// function Checkuser(user) {
//   if (user.age >= 18 && user.isMember){
//     console.log(`Welcome ${user.name} you have full access.`)
//   } else if (user.age < 18 && user.isMember){
//     console.log(`Hi, ${user.name} you have limited access.`)
//   }else{
//     console.log(`${user.name} please became a member of access`)
//   }
// } 
// //output is first statement

// Checkuser(user)

// let cart = {
//   items: 5,
//   totalprice: 2500,
//   isMember: true
// }

// function calculateFinalPrice(cart) {
//   let discount = 0;
//   if (cart.isMember && cart.totalprice > 1000){
//    discount = cart.totalprice * 15 / 100;
//   } else if (cart.isMember && cart.totalprice <= 1000) {
//    discount = cart.totalprice * 10 / 100;
//   } else {
//     discount = 0; //no discount for non members
//   }
//   let finalPrice = cart.totalprice - discount;
//   console.log(`you brought ${cart.items} items after discount your final price is ${finalPrice}`)
// } 

// calculateFinalPrice(cart)


// let order = {
//   customername: 'Nahid Pasha',
//   items: [
//     { name: "Burger", price: 150 },
//     { name: "Pizza", price: 350 },
//     { name: "Pasta", price: 2000 }
//   ],
//   isMember: false,
// }

// function calculateBill(order) {
//   let totalPrice = 0;

//   // Calculate total price
//   for (let i = 0; i < order.items.length; i++) {
//     totalPrice += order.items[i].price;
//   }

//   let discount = 0;

//   if (order.isMember) {
//     discount = totalPrice * 10 / 100;
//     console.log('For Members: 10% discount');
//   } else if (totalPrice >= 2000) {
//     console.log(`Free delivery because you buy more than 2000`);
//   } else {
//     console.log(`50 rupees delivery charges added: ${totalPrice + 50}`);
//   }

//   let finalPrice = totalPrice - discount;
//   console.log(`Total Price: ${totalPrice}`);
//   console.log(`Final Price after discount: ${finalPrice}`);
// }

// calculateBill(order);

let billAmount = 456.789;
let discount = 10;

let displayBill = billAmount.toFixed(2);
console.log(displayBill);

let discountfinal = (billAmount * discount) / 100;
let finalamount = Math.round((discountfinal * discount )* 100)
console.log(finalamount)


let price = 199.99;
let quantity = 3;

// Without parseFloat (wrong)
let totalWrong = price * quantity; // Works here but still string input
console.log(totalWrong); // "string"

// With parseFloat (correct)
let total = parseFloat(price * quantity);
console.log(total); // 599.97 (number)


