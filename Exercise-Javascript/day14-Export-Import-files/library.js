export class Library{
  #book = new Map()
  #user = new Map()
  #order = new Map()

  addBook(book){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#book.has(book.getId())){
          reject("book already exist")
        } else{
          this.#book.set(book.getId() , book)
          resolve(`${book.getTitle()} added successfully`)
        }
      }, 1500);
    })
  }

  registerUser(user){
    return new Promise((resolve , reject) => {
      setTimeout(() => {
        if(this.#user.has(user.getUserId())){
          reject("user already exist")
        } else{
          this.#user.set(user.getUserId() ,user )
          resolve(`${user.getName()} added successfully`)
        }
      }, 2000);
    })
  }

  PlaceOrder(order){
    return new Promise((resolve ,  reject)=>{
      setTimeout(() => {
        if(this.#order.has(order.getOrderDetail().orderId)){
          reject("order already there")
        } else{
          this.#order.set(order.getOrderDetail().orderId , order)
          resolve(`${order.getOrderDetail().orderId} added successfully`)
        }
      }, 2500);
    })
  }

  findBook(bookId){
    return new Promise((resolve , reject)=>{
      setTimeout(() => {
        if(this.#book.has(bookId)){
          resolve(this.#book.get(bookId))
        } else{
          reject("book not founded")
        }
      }, 2700);
    })
  }

  findUser(userId){
    return new Promise((resolve , reject)=> {
      setTimeout(() => {
        if(this.#user.has(userId)){
          resolve(this.#user.get(userId))
          
        } else{
          reject("user not founded")
        }
      }, 3000);
    })
  }

}