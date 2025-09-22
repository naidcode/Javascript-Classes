import {Book} from "./book.js"
import {User} from "./user.js"
import { Order} from "./order.js";
import { Library } from "./library.js";

let library =  new Library()
const book1 = new Book(123456, "Clean road", "James")
const book2 = new Book(123456, "Javascript", "Nahid")
console.log("Books:")
console.log(book1.toString() )
console.log(book2.toString()) 
// 👉 Book: Clean Code by James (ID: 123456)

const user1 = new User(1234587, "Nahid")
const user2 = new User("u102", "Fazil")
console.log("Users:")
console.log(user1.toString())
console.log(user2.toString())  


const order1 = new Order("o999", "u101", "123456")
const order2 = new Order("o999", "u101", "123456")
console.log("Orders:")
console.log(order1.toString())
console.log(order2.toString())  


async function fetchBookUserOrder(){
  try {
    let result1 = await Promise.all([
      library.findBook(123456),
      library.findUser(1234587),
      library.PlaceOrder(Order)

    ])
    console.log(result1)
  } catch (error) {
    console.log(error)
  }
}

async function processOrders(){
  let result2 = await Promise.allSettled([
   library.findBook(123456),
      library.findUser(1234587),
      library.PlaceOrder(Order)
  ])
  console.log(result2)
}

async function raceCondition(){
  let result3 = await Promise.race([
   library.findBook(123456),
      library.findUser(1234587),
      library.PlaceOrder(Order)
  ])
  console.log(result3)
}

async function anySuccess(){
   let result4 = await Promise.any([
   library.findBook(123456),
   library.findUser(1234587),
   library.PlaceOrder(Order)
  ])
  console.log(result4)
}
async function main(){
  try {
    await library.addBook(book1)
    await library.registerUser(User)

    await fetchBookUserOrder()
    await processOrders()
    await raceCondition()
    await anySuccess()
  } catch (error) {
    console.log(error)
  }
}
  
main()