//for loop
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//forEach method call a function once for each an element.
num.forEach((item) => {
  console.log(item * item);
});

// used to create an arrays from the any other objects.
let name = "nahid";
let arr = Array.from(name);
console.log(arr);

//for...of
for (const i of num) {
  console.log(i);
}

//for...in
for (const i in num) {
  if (Object.prototype.hasOwnProperty.call(num, i)) {
    const element = num[i];
    console.log(element);
  }
}

let dot = {
  name: "nahid",
  12: "fazil",
  namesss: "nahifazil",
  namess: "nafazil",
};

for (const i in dot) {
  if (Object.prototype.hasOwnProperty.call(dot, i)) {
    const element = dot[i];
    console.log(element)
  }
}

console.log(dot[12])  //bracket;

console.log(dot.name)

let key  = Object.keys(dot)   //object keys 
console.log(key);

let value = Object.values(dot);  //object values
console.log(value)

let entry = Object.entries(dot);  //object entries
console.log(entry);


for (const i in dot) {
  if (dot.hasOwnProperty(i)) {    //hasOwnProperty  method
    const element = dot[i];
    console.log(element)
    
  }
}

let search = new URLSearchParams(dot);    //URLSearchParams method.
console.log(search.toString())

//shallow copy

let shallowC = {...dot};
shallowC.name = "fouzi"

console.log(shallowC.name , dot.name)
