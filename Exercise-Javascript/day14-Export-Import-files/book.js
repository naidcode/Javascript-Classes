export class Book{
  #bookId
  #title
  #author
  constructor(id , title , author){
    this.#bookId = id
    this.#title = title
    this.#author = author
  }
   toString() {
    return `Book: ${this.#title} by ${this.#author} (ID: ${this.#bookId})`
  }

  getId(){
    return this.#bookId
  }

  getTitle(){
    return this.#title
  }

  getAuthor(){
    return this.#author
  }
}