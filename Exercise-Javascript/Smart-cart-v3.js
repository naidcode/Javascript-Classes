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

// final project that is combine of day 1 to 3 everything what we learn.

class Product {
  constructor(name, price, quantity, category) {
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.category = category;
  }
}

class Cart {
  constructor() {
    this.product = []
  }
  addProduct(_product) {
    this.product.push(_product);
  }

    viewProduct() {
    this.product.forEach((product , index) => {
      console.log( `${index + 1} - ${product.name} ${product.price} ${product.quantity} ${product.category}`);
    });
  }

  removeProduct(name) {
    let index = this.product.findIndex((product) => product.name === name);
    if (index !== -1) {
      let remove = this.product.splice(index, 1);
      console.log(`product removed successfully`, remove[0]);
    } else {
     console.log(`product '${name}' not found`);

    }
  }

  calculateProduct() {
    let total = this.product.reduce(
      (acc, product) => acc + product.price * product.quantity,0)
      if(total) {
        console.log(`total price before discount ₹${total}`);
      } else if(!total) {
        console.log("Cart is empty nothing to calculate")
      }
    

    let discount = 0;
    if (total > 10000) {
      discount = total * 0.2;
      console.log("discount applied 20%");
    } else if (total > 5000) {
      discount = total * 0.1;
      console.log("discount applied 10%");
    } else {
      console.log(`no discount your total price is ₹${total}`);
    }

    let final = total - discount;
    console.log(`your final price after discount is: ₹${final}`);
  }

  findProduct(name) {
    let find = this.product.find((product) => product.name === name)
    if(find){
       console.log(`product founded name is ${find.name} ${find.price} ${find.quantity}`);
    } else if(!find) {
      console.log("no product exist in the cart")
    }
   
  }

  expensiveProduct() {
    let expensive = this.product.filter((product) => product.price > 5000);
    console.log(`the expensive in the cart is this:`, expensive.map(p => p.name));
  }

  categoryProduct(name) {
    let category = this.product.filter((product) => product.category === name)
    if(category.length > 0){
      console.log(`product in category ${name}` , category.map(p => p.name))
    } else{
      console.log("No products found in this category.")
    }
  }

  sortProduct() {
  let sort = this.product.sort((a, b) => a.price - b.price)
  if(sort){
    console.log("All products sorted by price (low → high):");
  sort.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - ₹${product.price}`);
  });
  } else if(!sort) {
    console.log("no product to sort")
  }
  
}


  clearCart() {
     this.product = []
    console.log("all cart product cleared successfully!");
  }

  cheapProduct(){
     let cheap = this.product.filter((product) => product.price < 5000);
    console.log(`this are the cheap product you buy ` , cheap.map(p => p.name));
  }

  cartReport() {
    console.log("========= 🛒 Cart Report =========");
    this.viewProduct();
    console.log("-----------------------------");
    this.calculateProduct();
    console.log("-----------------------------");
    this.expensiveProduct();
   
    console.log("-----------------------------");
    this.cheapProduct()
    this.categoryProduct("electronic");
    console.log("-----------------------------");

console.log(`Total items (count): ${this.product.length}`);
  


    let avg =
      this.product.reduce((acc, product) => acc + product.price, 0) /
      this.product.length;
    console.log(`the average price of product is ${avg}`);
  }
}

let cart = new Cart();
cart.addProduct(new Product("laptop", 40000, 1, "electronic"));
cart.addProduct(new Product("fruit", 1500, 5, "fruit"));
cart.addProduct(new Product("tv", 60000, 1, "electronic"));
cart.addProduct(new Product("mircoWave", 15000, 1, "electronic"));
cart.addProduct(new Product("veggies", 25000, 5, "veggies"));
cart.addProduct(new Product("smartPhone", 129000, 1, "electronic"));
cart.addProduct(new Product("juicemixer", 14500, 1, "electronic"));
cart.addProduct(new Product("rice", 2000, 1, "grocery"));
cart.addProduct(new Product("pulse", 1000, 1, "grocery"));

cart.viewProduct();
cart.sortProduct()
cart.removeProduct("laptop");
cart.calculateProduct();
cart.findProduct("tv")
cart.expensiveProduct()
cart.expensiveProduct();
cart.cartReport();
cart.clearCart()

