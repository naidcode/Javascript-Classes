// Static = belongs to class itself, not objects.
class MathHelper {
  static pi = 3.14159; // static property

  static add(a, b) {   // static method
    return a + b;
  }

  static sub(a,b){
    return a - this.pi + b
  }

  static divided(a,b,c){
    return a / this.pi + b-c
  }
}

console.log(MathHelper.pi);      // 3.14159
console.log(MathHelper.add(5,2)); // 7
console.log(MathHelper.sub(5,7))  // 8.85841
console.log(MathHelper.divided(10,12,5)) // 10.183101550488765


class User{
  static usercount = 0
  constructor(username){
    this.username = username,
    User.usercount++;
  }


 usernames(){
  console.log(`hello my name is ${this.username}`)
}

static usercounts(){
  console.log(`there are only ${User.usercount} users are there`)
}

}

let user1 = new User("nahid");
let user2 = new User("fazil")

console.log(user1.username);
console.log(user2.username)
console.log(User.usercount)
user1.usernames()
user2.usernames()
User.usercounts();


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Static utility method
  static toCurrency(amount) {
    return `$${amount.toFixed(2)}`;
  }
}

console.log(Product.toCurrency(100)); 
// $100.00

const p = new Product("Phone", 999);
console.log(p.toCurrency); 
//  Error (not available on instances)


/*
!: Static methods → For utilities/helpers (don’t depend on an instance).
2: Static properties → For constants or shared class-level data.
#: Factory methods → A special kind of static method that returns a new instance.
*/