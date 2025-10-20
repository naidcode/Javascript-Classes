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
arr.forEach(arr1 => {
  
});
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

