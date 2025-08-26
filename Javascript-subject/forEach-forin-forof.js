 //for loop
let num = [1,2,3,4,5,6,7,8,9,];
for(let i = 0; i < num.length; i++) {   
  console.log(num[i])
};

//forEach method call a function once for each an element.
num.forEach(item => {     
  console.log(item * item);   
});

// used to create an arrays from the any other objects.
let name = "nahid";
let arr  = Array.from(name);   
console.log(arr);


//for...of 
for (const i of num) {
  console.log(i)
};

//for...in
for (const i in num) {
  if (Object.prototype.hasOwnProperty.call(num, i)) {
    const element = num[i];
    console.log(element)
    
  }
}