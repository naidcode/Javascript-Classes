// function chunk(array, size) {
  
// }


// console.log(chunk([1, 2, 3, 4, 5], 2))

function isAnagram(str1, str2) {
  let normal = (str) => {
    return str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  }

  let normalstr1 = normal(str1) 
  let normalstr2 = normal(str2)

return  normalstr1 === normalstr2
}

// Test it:
console.log(isAnagram("listen", "silent"))

function mostFrequent(str) {
  
}

// Test it:
console.log(mostFrequent("hello world"))