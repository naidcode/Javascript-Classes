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
