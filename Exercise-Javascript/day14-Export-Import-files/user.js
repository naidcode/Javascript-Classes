export class User{
  #userId
  #name 
  #borrowedBook = new Set()

  constructor(id , name){
    this.#userId = id
    this.#name = name
  }

  
  toString() {
    return `User: ${this.#name} (ID: ${this.#userId})`
  }

  getUserId(){return this.#userId}
  getName(){return this.#name}


  borrowBook(bookId){
    if(this.#borrowedBook.has(bookId)){
      console.log("book id already exist ")
    } else{
      this.#borrowedBook.add(bookId)
      console.log(`${bookId} added successfully`)
    }
  }

  returnBook(bookId){
    if(this.#borrowedBook.has(bookId)){
      this.#borrowedBook.delete(bookId)
      console.log(bookId ,"book id returned")
    } else{
      console.log("book id not found")
    }
  }

  getborrowBook(){return this.#borrowedBook}
}