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
