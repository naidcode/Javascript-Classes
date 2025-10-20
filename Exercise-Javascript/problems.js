// function chunk(array, size) {
//   let result = [];

//   for (let i = 0; i < array.length; i += size) {
//     let piece = array.slice(i , i + size)
//     result.push(piece)
//   }
//   return result
// }


// console.log(chunk([1, 2, 3, 4, 5,6,7,8,9], 3))

// function isAnagram(str1, str2) {
//   let normal = (str) => {
//     return str
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
//   }

//   let normalstr1 = normal(str1) 
//   let normalstr2 = normal(str2)

// return  normalstr1 === normalstr2
// }

// // Test it:
// console.log(isAnagram("listen", "silent"))

// function mostFrequent(str) {
  
// }

// // Test it:
// console.log(mostFrequent("hello world"))

function reverseString(arra){
 let arre = arra.split('');
 arre.reverse()
 let arr = arre.join('')
 return arr
}

console.log(reverseString("hello"))

function removeDuplicates(dupli){
   return  [...new Set(dupli)]
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Rewrite these using .filter() and return the result
function getEvenNumbers(){
  return numbers.filter(n => n % 2 === 0)
}

let results = getEvenNumbers()
console.log(results)

function getGreaterThanFive(){
  return numbers.filter(n => n >5)
}
let results2 = getGreaterThanFive()
console.log(results2)

function getLessThanOrEqualThree(){
  return numbers.filter(n => n <=3)
}
let results3 = getLessThanOrEqualThree()
console.log(results3)

function flattenArray(arr){
return arr.flat(Infinity)
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

function foo() {
    var a = 1;
    if (a >= 1) {
        let b = 2;
        while (b < 5) {
            let c = b * 2;
            b++;
            console.log( a + c );
        }
    }
}
foo();

function groupBy(array, property){
return array.reduce((group,items) => {
  let key = items[property];
  console.log(key)
  group[key] = group[key] || [];
  group[key].push(items)
  console.log(group[key])
  return items
 }, {});
}

// Test it:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 }
];

console.log(groupBy(people, "age"));

// Try with different property:
const products = [
  { name: "Apple", category: "fruit" },
  { name: "Carrot", category: "vegetable" },
  { name: "Banana", category: "fruit" }
];

console.log(groupBy(products, "category"));
// Should return:
// {
//   fruit: [Apple, Banana],
//   vegetable: [Carrot]
// }

let number = [2,4,6]
let num =  number.reduce((a,b) => a +b )

console.log(num)

let number1 = [3, 8, 2, 10, 5];
let max = number1[0]
// console.log(max)
number1.forEach(num => {
  if(num > max){
    console.log(max = num)
  }
})

let number2 = [1, 2, 3, 4, 5, 6];
let num3 = number2.filter(num => num % 2===0)
console.log(num3.length)


