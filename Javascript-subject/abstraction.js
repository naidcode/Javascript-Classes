/*What abstraction really requires:

A base (abstract) class that defines the method signature.
Subclasses that implement the method differently.
Client code that calls the method, without caring about subclass type.

How you call those methods can vary: */
class Payments{
  pay(amount){
    throw new Error(`implement this pay() in subclass and add ${amount}`);  // abstract class telling subclasses to implement this pay()
  }
}

class Credit extends Payments{
  pay(amount){
    console.log(`$${amount} received`)    // this two subclasses credit and upi is polymorphisms they call pay() in different message.
  }
}
class UPI extends Payments{
  pay(amount){
    console.log(`$${amount} received`)
  }
};

let payments = [new Credit() , new UPI()]

payments.forEach(p => p.pay(500))