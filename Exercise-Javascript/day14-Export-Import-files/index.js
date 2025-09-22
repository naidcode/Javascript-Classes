import {Book} from "./book.js"
import {User} from "./user.js"
import { Order} from "./order.js";
import { Library } from "./library.js";

let library =  new Library()
let book1 = new Book(123456, "clean code" , "james")
let user = new User(1234587 , "Nhaid pasha")
let order = new Order(1236987 , user.getUserId() , book1.getId())

async function fetchBookUserOrder(){
  try {
    let result1 = await Promise.all([
      library.findBook(123456),
      library.findUser(1234587),
      library.PlaceOrder(order)

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
      library.PlaceOrder(order)
  ])
  console.log(result2)
}

async function raceCondition(){
  let result3 = await Promise.race([
   library.findBook(123456),
      library.findUser(1234587),
      library.PlaceOrder(order)
  ])
  console.log(result3)
}

async function anySuccess(){
   let result4 = await Promise.any([
   library.findBook(123456),
   library.findUser(1234587),
   library.PlaceOrder(order)
  ])
  console.log(result4)
}
async function main(){
  try {
    await library.addBook(book1)
    await library.registerUser(user)

    await fetchBookUserOrder()
    await processOrders()
    await raceCondition()
    await anySuccess()
  } catch (error) {
    console.log(error)
  }
}
  
main()