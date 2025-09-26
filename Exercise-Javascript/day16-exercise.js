class Book{
  #title
  #author
  #year

  constructor(title , author , year){
    this.title = title
    this.#author = author
    this.#year = year
  }

  getTitle(){
    return this.#title
  }

  getAuthor(){
    return this.#author
  }

  getYear(){
    return this.#year
  }
}

class LIbrary{
#book = []

addBook(book){
  this.#book.push(book)
}

getAllBook(){
  return this.#book
}

*[Symbol.iterator](){
 for (const book of this.#book) {
  yield book
 }
}
  *getBookAfter(year){
    for (let book of this.#book) {
      if(book.getYear() > year){
        yield book
      }
    }
  }
}



// Create library
const library = new LIbrary()

// Add books
library.addBook(new Book("The Alchemist", "Paulo Coelho", 1988))
library.addBook(new Book("Clean Code", "Robert C. Martin", 2008))
library.addBook(new Book("Atomic Habits", "James Clear", 2018))
library.addBook(new Book("Deep Work", "Cal Newport", 2016))

// 🔹 Iterate all books (default iterator)
console.log("All Books:")
for (let book of library) {
  console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()})`)
}

// 🔹 Iterate filtered books (after 2010)
console.log("\nBooks After 2010:")
for (let book of library.getBookAfter(2010)) {
  console.log(`${book.getTitle()} by ${book.getAuthor()} (${book.getYear()})`)
}