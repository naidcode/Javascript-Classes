export class Order{
  #orderId
  #userId
  #bookId

  constructor(orderId,userId ,bookId){
    this.#orderId = orderId
    this.#userId = userId
    this.#bookId = bookId
  }
   toString() {
    return `Order: ${this.#orderId} | User: ${this.#userId} | Book: ${this.#bookId}`
  }
  getOrderDetail(){
    return{
      orderId: this.#orderId,
      userId: this.#userId,
      bookId: this.#bookId
    }
  }
}