class Book {
  #bookID
  #title
  #author

  constructor(bookID, title, author) {
    this.#bookID = bookID
    this.#title = title
    this.#author = author
  }

  getID() {
    return this.#bookID
  }

  getTitle() {
    return this.#title
  }

  getAuthor() {
    return this.#author
  }
}

class User {
  #Id
  #name
  #borrowedBooks = new Set()

  constructor(Id, name) {
    this.#Id = Id
    this.#name = name
  }

  getId() {
    return this.#Id
  }

  getName() {
    return this.#name
  }

  borrowBook(bookID) {
    if (this.#borrowedBooks.has(bookID)) {
      console.log("book id already exist")
    } else {
      this.#borrowedBooks.add(bookID)
      console.log(`${bookID} added successfully`)
    }
  }

  returnBook(bookID) {
    if (this.#borrowedBooks.has(bookID)) {
      this.#borrowedBooks.delete(bookID)
      console.log(`${bookID} returned`)
    } else {
      console.log("book id not found")
    }
  }

  getBorrowedBooks() {
    return this.#borrowedBooks
  }
}

class Order {
  #orderId
  #userId
  #bookID

  constructor(orderId, userId, bookID) {
    this.#orderId = orderId
    this.#userId = userId
    this.#bookID = bookID
  }

  getOrderDetails() {
    return {
      orderId: this.#orderId,
      userId: this.#userId,
      bookId: this.#bookID
    }
  }
}

class Library {
  #Books = new Map()
  #users = new Map()
  #orders = new Map()

  addBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#Books.has(book.getID())) {
          reject("book already exist")
        } else {
          this.#Books.set(book.getID(), book)
          resolve("book added successfully")
        }
      }, 1000)
    })
  }

  registerUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#users.has(user.getId())) {
          reject("user already exist")
        } else {
          this.#users.set(user.getId(), user)
          resolve("user added successfully")
        }
      }, 1300)
    })
  }

  placeOrder(order) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#orders.has(order.getOrderDetails().orderId)) {
          reject("order already there")
        } else {
          this.#orders.set(order.getOrderDetails().orderId, order)
          resolve("order added successfully")
        }
      }, 1600)
    })
  }

  findBookById(bookID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#Books.has(bookID)) {
          resolve(this.#Books.get(bookID))
        } else {
          reject("book not found")
        }
      }, 1800)
    })
  }

  findUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#users.has(userId)) {
          resolve(this.#users.get(userId))
        } else {
          reject("user not found")
        }
      }, 2000)
    })
  }
}

// Example Usage
const library = new Library()
const book1 = new Book(123456, "JavaScript Mastery", "Nahid")
const user1 = new User(990058, "Pasha")
const order1 = new Order(456123, user1.getId(), book1.getID())

async function fetchBookUserOrder() { 
  try {
    let results = await Promise.all([
      library.findBookById(123456),
      library.findUserById(990058),
      library.placeOrder(order1)
    ])
    console.log(results)
  } catch (err) {
    console.log("Error:", err)
  }
}

async function processOrders() {
  let result2 = await Promise.allSettled([
    library.findBookById(123456),
    library.findUserById(990058),
    library.placeOrder(order1)
  ])
  console.log(result2)
}

async function raceCondition() {
  let result3 = await Promise.race([
    library.findBookById(123456),
    library.findUserById(990058),
    library.placeOrder(order1)
  ])
  console.log(result3)
}

async function anySuccess() {
  let result4 = await Promise.any([
    library.findBookById(123456),
    library.findUserById(990058),
    library.placeOrder(order1)
  ])
  console.log(result4)
}

library.addBook(book1)
  .then(() => library.registerUser(user1))
  .then(() => {
    fetchBookUserOrder()
    processOrders()
    raceCondition()
    anySuccess()
  })
  .catch(err => console.log(err))
