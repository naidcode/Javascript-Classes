class Book {
  constructor(title, author, price, quantity, category) {
    if (price < 0 || quantity < 0) throw new Error("enetr valid number");
    (this.title = title),
      (this.author = author),
      (this.price = price),
      (this.quantity = quantity),
      (this.category = category)
  }

  get Totalvalue() {
    return this.price * this.quantity;
  }

  discount() {
    if (this.category === "Education") {
      return this.price * 0.90
    }
     return this.Totalvalue;
  }
}

class EBook extends Book {
  constructor(title, author, price, quantity, category, fileSizeMB) {
    super(title, author, price, quantity, category);
    this.fileSizeMB = fileSizeMB;
  }

  discount() {
    return this.Totalvalue * 0.80
  }
}

class Member {
  constructor(name , membershiptype = "regular") {
    this.name = name,
    this.membershiptype = membershiptype,
     this.borrowedCount = 0;
  }

  etMaxBorrow() {
    return this.membershiptype === "premium" ? 5 : 2;
  }
}

class Library {
  #books = [];

  addBooks(book) {
    if (!book) throw new error("add books in the cart first");
    this.#books.push(book);
  }

 removeBytitle(title){
let index = this.#books.findIndex(book => book.title === title);
if(index !== -1){
let remove = this.#books.splice(index , 1);
 console.log(` Book ${title} removed`);
 } 
 else {
    console.log("no product found");
 }
};

  findBook(title) {
    return this.#books.find((book) => book.title === title);
  }

  listBooks() {
    console.log("📚 Library Books:");
    this.#books.forEach((book, index) => {
      let extra = book instanceof EBook ? ` | File: ${book.fileSizeMB}MB` : "";
      console.log(
        `${index + 1}. ${book.title} by ${book.author} | ₹${book.price} | Qty: ${
          book.quantity
        } | Cat: ${book.category}${extra}`
      );
    });
  }
  report(){
    let total =  this.#books.reduce((acc , book) => acc + book.Totalvalue,0);
    console.log(`total price before discount: ${total}`);

    let discounted = this.#books.reduce(
      (acc, book) => acc + book.discount(),
      0
    );
    console.log(`✅ Final price after discount: ₹${discounted}`);
  }

  };




let library = new Library();

let harrypotter = new Book("Harry Potter", "JK", 500, 1, "Fiction");
let atomichabbit = new Book("Atomic Habit", "James", 250, 5, "Self-Taught");
let reacthandbook = new Book("React Handbook", "Fazil", 500, 8, "Education");
let javascriptBook = new Book(
  "JavaScript Mastery",
  "Fouzi",
  1500,
  10,
  "Education"
);
let ebook1 = new EBook("Clean Code (Ebook)", "Nahid", 600, 4, "Education", 5);

library.addBooks(harrypotter);
library.addBooks(atomichabbit);
library.addBooks(reacthandbook);
library.addBooks(javascriptBook);
library.addBooks(ebook1);

library.listBooks();
library.removeBytitle("Clean Code (Ebook)");
console.log("🔍 Found book:", library.findBook("Atomic Habit"));
library.report();