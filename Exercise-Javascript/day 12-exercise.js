// // function fetchData() {
// //   return new Promise((resolve, reject) => {
// //     let success = true;

// //     if (success) {
// //       resolve("Data loaded!");
// //     } else {
// //       reject("Something went wrong...");
// //     }
// //   });
// // }

// // fetchData()
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("Process finished");
// //   });


//   class WeatherApp{
//     #city
//     constructor(city){
//       this.#city = city
//     }

//     fetchWeather(){
//       return new Promise((resolve , reject) => {
//         setTimeout(() => {
//           if(this.#city){
//             resolve(`weather date for ${this.#city}: Sunny, 25°C`)
//           } else{
//             reject("city not found")
//           }
//         },2000 );
//       })
//     }

//     showWeather(){
//       this.fetchWeather().then(value => console.log(value)).catch(error => console.log(error))
//     }

//     handleError(){
//       this.fetchWeather().catch(error => console.log(error))
//     }

//     processComplete(){
//       this.fetchWeather().finally(() =>console.log("process completed successfully"))
//     }
//   }


//   let weather = new WeatherApp("London")

//   weather.showWeather()
//   weather.handleError()
//   weather.processComplete()

  
// let weather2 = new WeatherApp(""); 
// weather2.showWeather();       // Failure case
// weather2.handleError();
// weather2.processComplete()


// class FoodDelivery{
//   #OrderID;
//   constructor(orderID){
//     this.#OrderID = orderID
//   }

//   placeOrder(){
//     return new Promise((resolve , reject) => {
//       setTimeout(() => {
//         if(this.#OrderID){
//           resolve("Order placed: Pizza")
//         } else{
//           reject("no order yet")
//         }
//       }, 2000);
//     })
//   }

//     prepareOrder(){
//       return new Promise((resolve , reject) => {
//         setTimeout(() => {
//           if(this.#OrderID){
//             resolve("Pizza Prepared")
//           } else{
//             reject("we don't have any order")
//           }
          
//         }, 3000);
//       })
//     }

//     deliverOrder(){
//       return new Promise((resolve , reject) => {
//         setTimeout(() => {
//           if(this.#OrderID){
//             resolve(`pizza Delivered`)
//           } else{
//             reject("no order ")
//           }
          
//         }, 4000);
//       })
//     }
// }

// let foodDelivery = new FoodDelivery(1235689)

// async function DeliveryMachine() {
//   try{
//     let placeorder =await foodDelivery.placeOrder()
//     console.log(placeorder)

//     let process = await foodDelivery.prepareOrder()
//     console.log(process)
     
//     let Delivered = await foodDelivery.deliverOrder()
//     console.log(Delivered)
//   } catch(e){
//     console.log(e)
//   } finally{
//     console.log("all task finished")
//   }
// }

// DeliveryMachine()



class Book {
  #bookID
  #title
  #author

  constructor(bookID, title, author) {
    if (typeof bookID !== "number") throw new Error("Invalid bookID")
    this.#bookID = bookID
    this.setTitle(title)
    this.setAuthor(author)
  }

  getId() { return this.#bookID }
  getTitle() { return this.#title }
  getAuthor() { return this.#author }

  setTitle(value) {
    if (typeof value !== "string") throw new Error("Invalid title")
    this.#title = value
  }

  setAuthor(value) {
    if (typeof value !== "string") throw new Error("Invalid author")
    this.#author = value
  }
}

class User {
  #id
  #name
  #borrowedBooks = new Set()

  constructor(id, name) {
    this.#id = id
    this.#name = name
  }

  getId() { return this.#id }
  getName() { return this.#name }

  borrowBook(bookID) {
    if (this.#borrowedBooks.has(bookID)) {
      return "Book already borrowed"
    }
    this.#borrowedBooks.add(bookID)
    return "Book borrowed successfully"
  }

  returnBook(bookID) {
    if (this.#borrowedBooks.has(bookID)) {
      this.#borrowedBooks.delete(bookID)
      return `Book ${bookID} returned`
    }
    return "Book not borrowed"
  }

  getBorrowedBooks() {
    return [...this.#borrowedBooks]
  }
}

class Library {
  #books = new Map()
  #users = new Map()

  async addBook(book) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#books.has(book.getId())) {
          reject("Book already exists")
        } else {
          this.#books.set(book.getId(), book)
          resolve("Book added successfully")
        }
      }, 1000)
    })
  }

  async removeBook(bookID) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#books.has(bookID)) {
          this.#books.delete(bookID)
          resolve(`Book ${bookID} removed`)
        } else {
          reject("Book not found")
        }
      }, 1000)
    })
  }

  async registerUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.#users.has(user.getId())) {
          reject("User already exists")
        } else {
          this.#users.set(user.getId(), user)
          resolve("User registered successfully")
        }
      }, 1000)
    })
  }

  findBookById(bookID) {
    return this.#books.get(bookID) || null
  }

  findUserById(userID) {
    return this.#users.get(userID) || null
  }

  borrowBook(userID, bookID) {
    let user = this.findUserById(userID)
    let book = this.findBookById(bookID)
    if (!user) throw new Error("User not found")
    if (!book) throw new Error("Book not found")
    return user.borrowBook(bookID)
  }

  returnBook(userID, bookID) {
    let user = this.findUserById(userID)
    if (!user) throw new Error("User not found")
    return user.returnBook(bookID)
  }
}

async function runLibrary() {
  let library = new Library()

  let book1 = new Book(1, "JavaScript Basics", "John Smith")
  let book2 = new Book(2, "Python for Beginners", "Jane Doe")
  let user1 = new User(101, "Alice")

  try {
    console.log(await library.addBook(book1))
    console.log(await library.addBook(book2))
    console.log(await library.registerUser(user1))

    console.log(library.borrowBook(101, 1))
    console.log(library.returnBook(101, 1))
    console.log(library.borrowBook(101, 2))
  } catch (error) {
    console.log("Error:", error)
  } finally {
    console.log("Library process finished")
  }
}

runLibrary()
