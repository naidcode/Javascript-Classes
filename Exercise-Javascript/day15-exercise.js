function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


//mini project 
class User {
  #userId
  #name
  constructor(id, name) { 
    this.#userId = id
    this.#name = name
   }
  getUserId() { return this.#userId }
  getName() { return this.#name }
}

class TokenService {
  // Closure to keep tokens private
  static createTokenManager() {
   let tokens = new Map(); // private via closure
    return {
      generate(userId) { 
        return new Promise((resolve , reject)=>{
          setTimeout(() => {
            if(tokens.has(userId)){
          reject("user id already exist")
        } else{
          tokens.set(userId)
          resolve("user id added successfully")
        }
          }, 1000);
        })
       }, 
      validate(token) {
        return new Promise((resolve , reject)=>{
          setTimeout(() => {
            if(tokens.has(token)){
              resolve("yes token is valid ")
            } else{
              reject("invalid token")
            }
          }, 1200);
        })
       }, 
      revoke(token) { 
       return new Promise((resolve , reject)=>{
        setTimeout(() => {
           if(tokens.has(token)){
          tokens.delete(token)
          resolve("token removed")
        } else{
          reject("token not found")
        }
        }, 1500);
       })
       }       
    }
  }
}

class App {
  #userList = new Map()
  #tokenManager
  constructor() {
    this.#tokenManager = TokenService.createTokenManager()
  }
  registerUser(user) { 
    return new Promise((resolve , reject)=>{
      if(this.#userList.has(user.getUserId())){
        reject("user already exist")
      } else{
        this.#userList.set(user.getUserId() ,user)
        resolve("user added successfully")
      }
    })
   }
  
   async loginUser(userId) {
    if(!this.#userList.has(userId)){
      throw new Error("user not found");
    } else{
      return await this.#tokenManager.generate(userId)
    }
   }

   async  validDateUser(token) {
    return await this.#tokenManager.validate(token)
   }

   async  logOutUser(token) {
    return await this.#tokenManager.revoke(token)
   }
  }

  const app = new App();
const user = new User(101, "Nahid");

app.registerUser(user).then(v => console.log(v));
let token;
app.loginUser(user.getUserId())
  .then(t => {
    token = t;
    console.log("Generated Token:", token);
  });
app.validDateUser(token).then(v => console.log(v));
app.logOutUser(token).then( v => console.log(v));
app.validDateUser(token).catch(v => console.log(v));



class Cart{
#item = new Map()
#wishList = new Set()

constructor(item , wishList){
  this.#item = item
  this.#wishList = wishList
}

addItem(productId, quantity){
  if(typeof productId !== "string" || productId <= 0) throw new Error("invalid product id ");
  if(quantity <= 0) throw new Error("invalid quantity");
  if(this.#item.has(productId)){
    let exist = this.#item.get(productId)
    exist.quantity += quantity
    this.#item.set(productId , exist)
  } else{
    this.#item.set(productId , {quantity})
    console.log("product added successfully")
  }
}

  removeItem(productId){
    if(this.#item.has(productId)){
      this.#item.delete(productId)
      console.log("product is delete successfully")
    } else{
      throw new Error("product is not found")
    }
  }

  getAllItem(){
   return Array.from(this.#item.entries()).map(([id, obj]) => ({
      productId: id,
      quantity: obj.quantity,
    }));
  }

  addToWishlist(productId){
    if(this.#wishList.has(productId)){
      console.log("product id already exist ")
    } else{
      this.#wishList.add(productId)
      console.log("product added successfully")
    }
  }
  
  UpdateQuantity(productId , Quantity){
    let exist  = this.#item.get(productId)
    exist.quantity = Quantity
    this.#item.set(productId , exist);
    console.log("quantity updated successfully")

  }

  getQuantity(){
    if(!this.#item.has(productID)){
      return 0
    } 
    this.#item.get(productId).quantity
  }
  removeFromWishlist(productId){
    if(this.#wishList.has(productId)){
      this.#wishList.delete(productId)
      console.log("product remove from wish list")
    } else{
      console.log("product not found")
    }
  }

  getWishlist(){
    return Array.from(this.#wishList)
  }

async saveToServer(){
  new Promise((resolve , reject)=>{
    setTimeout(() => {
      if(this.#item.size === 0){
        reject("cart empty")
      } else{
        resolve("updated successfully")
      }
    }, 2000);
  })
  }

  static fromSeed(seedArray) {
    const items = new Map();
    seedArray.forEach(({ productId, quantity }) => {
      if ((typeof productId !== "string" && typeof productId !== "number") || quantity <= 0)
        throw new Error("Invalid seed data");
      items.set(productId, { quantity });
    });
    return new Cart(items);
  }
}

// 1. Create a new empty cart
const myCart = new Cart();

// 2. Add items to cart
try {
  myCart.addItem(101, 2);
  myCart.addItem("102", 5);
  myCart.addItem(101, 3); // quantity should update to 5
} catch (error) {
  console.error(error.message);
}

// 3. View all items
console.log("All items in cart:", myCart.getAllItem());

// 4. Update quantity
try {
  myCart.updateQuantity(102, 10);
} catch (error) {
  console.error(error.message);
}
console.log("Updated items:", myCart.getAllItem());

// 5. Remove item
try {
  myCart.removeItem(101);
} catch (error) {
  console.error(error.message);
}
console.log("After removal:", myCart.getAllItem());

// 6. Add items to wishlist
myCart.addToWishlist(201);
myCart.addToWishlist("202");
myCart.addToWishlist(201); // duplicate, should show message
console.log("Wishlist items:", myCart.getWishlist());

// 7. Remove from wishlist
myCart.removeFromWishlist(201);
console.log("Updated wishlist:", myCart.getWishlist());

// 8. Save cart to server (async)
async function saveCart() {
  try {
    const result = await myCart.saveToServer();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
saveCart();

// 9. Create cart from seed array
const seedCart = Cart.fromSeed([
  { productId: 301, quantity: 2 },
  { productId: "302", quantity: 4 },
]);
console.log("Seed cart items:", seedCart.getAllItem());
