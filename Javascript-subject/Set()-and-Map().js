//-------Map()------
/*
➤ What is Map?

* A collection of key-value pairs where any value (objects or primitives) can be used as a key.

* Unlike objects, the keys are not limited to strings or symbols.

* Maintains the order of insertion.

➤ Common methods
Method	Description
set(key, value)	- Adds or updates a key-value pair
get(key)  	    -  Retrieves the value for a key
has(key)  	    -  Checks if the key exists
delete(key)     -  Removes the key-value pair
clear()  	      -  Removes all entries
size  	        -  Returns the number of entries
*/

const userRoles = new Map();

// Add entries
userRoles.set("alice", "admin");
userRoles.set("bob", "editor");

// Access entries
console.log(userRoles.get("alice")); // 'admin'

// Check if a key exists
console.log(userRoles.has("alice")); // true

// Delete an entry
userRoles.delete("alice");

// Check the size
console.log(userRoles.size); // 1

// Iterate over the map
userRoles.forEach((role, user) => {
  console.log(`${user} is ${role}`);
});

let value = [["nahid" , 20] , ["fazil" , 23]];
let map = new Map(value);

// map.set("fouzi" , 16)         // set is to add (key , values)
// map.delete("fouzi")           // delete we use to delete the key and value both
// console.log(map.has("nahid")) // has we use when we want to know this value is true or false
// console.log(map.size)         // size we use to check length of value
// map.set("fouzi" , 16)         // set same first one description
// console.log(map.size)         // size use to check length of value
// console.log(map.get("nahid")) // get we use to to check the value of key (key , value)
// console.log(value)

/**
 ✅ When to use Map instead of Object or Array
Use case	                              Why Map is better
Keys are objects or functions	          Objects only allow string or symbol keys
Need ordered entries	                  Map maintains insertion order
Frequent addition/removal of entries	  Map offers efficient operations
Working with dynamically changing data	Maps are designed for flexible data structures
 */
// ------Set()------
/*
➤ What is Set?

A collection of unique values, meaning no duplicates are allowed.
Can store any type of value (primitive or object).
Maintains insertion order.

➤ Common methods
Method	Description
has(value)	      -   Checks if the value exists  true or false
delete(value)	    -   Removes the value
add(value)	      -   Adds a new value
clear()	          -   Removes all values
size	            -   Returns the number of values
 */

const numbers = new Set();

// Add values
numbers.add(1);
numbers.add(2);
numbers.add(2); // Duplicate, will be ignored
numbers.add(3);
console.log(numbers)
// Check if value exists
console.log(numbers.has(2)); // true

// Delete a value
numbers.delete(`${1} deleted 1 from numbers`);

// Iterate over values
numbers.forEach((element) => {
  console.log(`${element} showing values of numbers`)
});

// Size of the set
console.log(`${numbers.size} size ki value`); 
// we can easily remove duplicate value from arrays.
let arr = ["nahid" , "nahid" , "fazil" ,"fouzi" ,"fouzi"]  
let uni = [...new Set(arr)]
console.log(uni)



// weakMap
/**
 ➤ What is WeakMap?

A collection of key-value pairs where keys must be objects.
Keys are held weakly, meaning if no other references exist, the key and its value can be garbage-collected.
 */
let weak = new WeakMap()

function companyRole(data, obj) {   // 
  weak.set(data , obj)
}

let user = {name: "Nahid pasha"}
companyRole(user,  {age: 20})

console.log(weak.get(user))

// WeakSet()
/**
 * ➤ What is WeakSet?

A collection of unique object references.
Objects in a WeakSet are held weakly and can be garbage-collected when no other references exist.
 */

let weaks = new WeakSet()

function transaction(obj) {
  if(weaks.has(obj)){
    console.log("already processed")
  }else{
    console.log("processing...")
    weaks.add(obj)
  }
}
let item = {id: 20}
transaction(item)
transaction(item)