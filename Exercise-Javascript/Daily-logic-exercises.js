class Library{
  #books = new Map()
  constructor(id, title,author){
    this.id = id,
    this.title = title,
    this.author = author
  }

  static fromSeed(seedArray){
    let libraray = new Library()
    seedArray.forEach(l  => libraray.addBook(l));
    return libraray
  }

  addBook(book){
    if(typeof id === "string") throw new Error("invalid id");
   if(this.#books.has(book)){
    console.log("book already exist")
   } else{
    this.#books.set(book)
    console.log("book added " , book)
   }
  }

  getBook(id){
   if(this.#books.has(id)){
    console.log("book found" , id)
   } else{
    console.log("id not founded")
   }
  }
  removeBook(id){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#books.has(id)){
      this.#books.delete(id)
      resolve("is deleted" , id)
    } else{
      reject("id not founded")
    }
      }, 2000);
    })
  }
}

seedArray = [
  new Library(123456 , "atomic habbit" , "James"),
  new Library(1234567 , "atomic " , "nahid"),
  new Library(1234568 , "48 laws" , "fazil"),
  new Library(1234569 , "clean code " , "fouzi"),

]
let libraray = Library.fromSeed(seedArray);


console.log(libraray.getBook("1234569"))
libraray.removeBook(123456).then(value => console.log(value))
                           .catch(error => console.log(error))
                           