/* 
1. What are Private Fields?

Normally, all properties in JavaScript classes are public → anyone can access or change them.
Private fields (declared with #) are only accessible inside the class.
Outside the class → you cannot access them, not even by mistake.
*/

//syntax

class priPassword{
  #privateFields;
}


// private with getter and setter exercise.

class BalAmount{
  #balance = 0;

  set balance(amount){
    if(amount > 0){
      this.#balance = amount
    }else{
      console.log("bal cannot be negative")
    }
  };

  get balance(){
    return this.#balance
  }
};
 let bal = new BalAmount();
 bal.balance = 20000;
console.log(bal.balance);

bal.balance = -500;
console.log(bal.balance);


/*
5. Key Rules about #privateField

1: Must be declared in the class with # before using.

2: Only accessible inside class methods.

3: Not inherited by objects outside.

4: Cannot be accessed via this["#field"] (no hacks). 
*/

