for (let index = 0; index < 20; index++) {
  //For loop
  console.log(index);
}

let obj = {
  nahid: 90,
  fazil: 85,
  fouziya: 80,
};
for (const a in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, a)) {  //for in loop
    const element = obj[a];   
    console.log(`student marks ${a} and  ${element}`);
  }
}

for (const b of "nahid") {
  console.log(b.toLocaleUpperCase())   //for of loops
}



let n = 11
let i = 1;
while (i < n) {    //while loop
console.log(i)
i++
}

do {
  i++
} while (i < n);
console.log(i)
console.log(i)


let ite = [1,2,3,4,5,6]
ite.forEach(v  => {
  console.log(v)
});
                                       // they both are same but for...of is easy way to use
for (const v of ite) {
  console.log(v)
}