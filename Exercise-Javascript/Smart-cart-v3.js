// class Product{
//   constructor(name , price , quantity) {
//     this.name = name,
//     this.price = price,
//     this.quantity = quantity
//   }
// }

// class Cart{
//   constructor(){
//     this.product = []
//   }
//  addProduct(_product) {
//   this.product.push(_product);
// }


//   viewProduct(){
//     this.product.forEach((product, index) => {
//       console.log(`${index + 1 } ${product.name} ${product.price} ${product.quantity}`)
//     })
//   }
//   removeProduct(name){
//     let index = this.product.findIndex(p => p.name === name);
//     if(index !== -1){
//       let remove = this.product.splice(index , 1);
//       console.log(`product remove from the cart`, remove[0]);
//     }else{
//       console.log(`product not found ${name}`)
//     }
//   }

//   calculateTotal(){
//   let total =  this.product.reduce((acc , product) => acc + (product.price * product.quantity),0);
//   console.log(`the total price is ${total}`)

//     let discount = 0;
//     if(total > 10000){
//       discount = total * 0.20;
//       console.log(`applied discount 20% ${total - discount}`)
//     } else if(total > 5000){
//       discount = total * 0.10;
//       console.log(`discount applied 10% ${total - discount}`)
//     } else{
//       console.log(`no discount applied`)
//     }

//     let final = total - discount;
//     console.log(`the final price after discount is: ${final}`)
//   };

//   expensiveItem(){
//     let expensive = this.product.filter(product => product.price > 2000)
//     console.log(`this products is expensive `, expensive.map(product => product.name))
//   }
//   findProduct(name){
//     let find = this.product.find(product => product.name === name );
//     console.log(`this the product you are searching  ` , find)
//   };



// }

// let cart = new Cart();

// cart.addProduct(new Product("fruit" , 5000 , 15));
// cart.addProduct(new Product("veg" , 1200 , 10))
// cart.addProduct(new Product("laptop" , 40000 , 1))
// cart.addProduct(new Product("tv" , 35000 , 1))
// cart.addProduct(new Product("micro wave" , 15000 , 1));

// cart.viewProduct();
// cart.removeProduct("laptop")
// cart.calculateTotal();
// cart.expensiveItem();
// cart.findProduct("veg");
// cart.removeProduct("laptop")




