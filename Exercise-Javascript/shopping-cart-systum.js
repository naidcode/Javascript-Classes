let products = [];

function addProducts(name , price , quantity) {
  products.push({name , price , quantity});
};

function viewProducts() {
products.forEach((product , index) => {
    console.log(`${index + 1} - ${product.name} ${product.price} ${product.quantity}`);
  })
}

function findProduct(name) {
  return products.find(product => product.name === name);
};

function removeProduct(name) {
  products = products.filter(product =>  product.name !== name);
  console.log("product remove",name)
}

function sortProducts() {
let sort = products.sort((a , b) => a.price - b.price);
console.log(sort)
}

function affortableProduct() {
  let affortable = products.every(product => product.price < 1000);
  console.log(affortable)
}

function expensive() {
  let expensive = products.some(product=> product.price > 500);
console.log(expensive)
};

function cartTotal() {
let total = products.reduce(( acc , product) => acc + (product.price * product.quantity), 0);
console.log(`the total of the cart is ${total}`);
return total;
};

function discountCart() {
 let discount = products.map(product => (product.price * product.quantity) * 0.90);
 console.log(`total price after discount is:`, discount);

  let final = discount.reduce((acc, product) => acc + product , 0);
  console.log(`After discount the final price is` ,final)
};

function cartReport() {
  products.forEach((product , index) => {
    `${index + 1} - ${product.name} ${product.price} ${product.quantity}`;
  });

let total = products.reduce(( acc , product) => acc + product.price , 0);


 let discount = products.map(product => product.price - (product.price * 10 / 100 ));


  let final = discount.reduce((acc, product) => acc + product , 0);
  

  console.log("All Products with price and quantity");
  products.forEach((product , index) => {
    console.log(`${index + 1} - ${product.name} ${product.price} ${product.quantity}`);
  });
  console.log(`the total of the cart is ${total}`);
console.log(`After discount the final price is` ,final);

};




addProducts("fruit" , 500, 1);
addProducts("veggies" , 1000, 10)
addProducts("aata" , 300, 1)
addProducts("dryfruit" , 2500, 5)
addProducts("bottles" , 250, 5)
addProducts("plates" , 1400, 2)
addProducts("juice mixcer " , 4000, 1)
addProducts("cat food" , 350, 1)
addProducts("football" , 850, 1);

viewProducts();
console.log(findProduct("aata"));
console.log(removeProduct("plates"));
sortProducts();
affortableProduct();
expensive();
cartTotal();
discountCart();
cartReport()
