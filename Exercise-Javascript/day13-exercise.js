class Book{
  #bookID
  #title
  #author

  constructor(bookID , title , author){
    this.#bookID = bookID,
    this.#title = title,
    this.#author = author
  }

  getID(){
    return this.#bookID
  }

  getTitle(){
    return this.#title
  }

  getAuthor(){
    return this.#author
  }
}

class User{
  #Id
  #name
  #borrowedBooks = new Set()

  constructor(Id , name){
    this.#Id =  Id 
    this.#name = name
  }

  getId(){
    return this.#Id
  }

  getName(){
    return this.#name
  }

  borrowBook(bookID){
    if(this.#borrowedBooks.has(bookID)){
      console.log("book id already exist")
    } else{
      this.#borrowedBooks.add(bookID)
      console.log(`${bookID} added successfully`)
    }
  }

  returnBook(bookID){
    if(this.#borrowedBooks.has(bookID)){
      this.#borrowedBooks.delete(bookID)
      console.log(`${bookID} returned`)
    } else{
      console.log("book id not found")
    }
  }

  getBorrowedBooks(){
    return this.#borrowedBooks
  }

}

class Order{
  #orderId
  #userId
  #bookID

  constructor(orderId , userId , bookID){
    this.#orderId = orderId
    this.#userId = userId
    this.#bookID = bookID
  }

  getOrderDetails(){
    return this.#orderId
  }
}

class Library{
  #Books = new Map()
  #users =  new Map()
  #orders = new Map()

  addBook(book){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#Books.has(book.getID() , book)){
          reject("book already exist")
        } else{
          this.#Books.set(book)
          resolve("book added successfully")
        }
      }, 1000);
    })
  }

  registerUser(user){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#users.has(user.getId() , user)){
          reject("user already exist")
        } else{
          this.#users.set(user)
          resolve("user added successfully")
        }
      }, 1300);
    })
  }

  placeOrder(order){
    return new Promise((resolve , reject ) => {
      setTimeout(() => {
        if(this.#orders.has(order)){
          reject("order already there")
        } else{
          this.#orders.set(order)
          resolve("order added successfully")
        }
      }, 1600);
    })
  }

  findBookById(bookID){
    return new Promise((resolve , reject ) => {
      setTimeout(() => {
              if(this.#Books.has(bookID)){
        resolve(this.#Books.get(bookID));
      } else {
        reject("Book not found");
      }

      }, 1800);
    })
  }

  findUserById(userId){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
                if(this.#users.has(userId)){
          resolve(this.#users.get(userId));
        } else {
          reject("user id not found");
        }

      }, 2000);
    })
  }
}

async function fetchBookUserOrder(){

   let results =  await Promise.all([findBookById(123456) , findUserById(990058) , placeOrder(456123)])
  console.log(results)
  } 

  async function processOrders(){
    let result2 =  await Promise.allSettled([findBookById(123456) , findUserById(990058) , placeOrder(456123)])
    console.log(result2)
  }

  async function raceCondition(){
    let result3 = await Promise.race([findBookById(123456) , findUserById(990058) , placeOrder(456123)])
    console.log(result3)
  }

 async function anySuccess(){
   let result4 =  await Promise.any([findBookById(123456) , findUserById(990058) , placeOrder(456123)])
    console.log(result4)
    
  }

  fetchBookUserOrder()
  processOrders()
  raceCondition()
  anySuccess()