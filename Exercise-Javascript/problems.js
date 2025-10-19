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
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))



function findLongestWord(long){
  let sep = long.split(' ')
  let longs = sep[0]
  for (const sepz of sep) {
    if(sepz.length > longs.length){
    longs = sepz
    }
  }
  return longs
}
console.log(findLongestWord("I love JavaScript programming"))