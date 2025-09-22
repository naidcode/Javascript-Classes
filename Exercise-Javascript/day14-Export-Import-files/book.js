export class Book{
  #bookId
  #title
  #author
  constructor(id , title , author){
    this.#bookId = id
    this.#title = title
    this.#author = author
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