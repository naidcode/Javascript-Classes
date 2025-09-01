// object.keys.
const user = { name: "Nahid", age: 19 };
console.log(Object.keys(user)); // ["name", "age"]

//object.values
console.log(Object.values(user)); // ["Nahid", 19]

//object.entries
console.log(Object.entries(user)); 
// [["name", "Nahid"], ["age", 19]]

//object.fronEntries
console.log(Object.entries(user)); 
// [["name", "Nahid"], ["age", 19]]

//objevt.assign
const defaults = { role: "guest", active: true };
const userData = { name: "Nahid" };
const finalUser = Object.assign({}, defaults, userData);
console.log(finalUser);
// { role: "guest", active: true, name: "Nahid" }

//object.freeze
const settings = { darkMode: true };
Object.freeze(settings);
settings.darkMode = false; 
console.log(settings.darkMode); // true

//object.create
const person = { greet() { console.log("Hello"); } };
const user1 = Object.create(person);
user1.greet(); // Hello

//object.hasOwn
console.log(Object.hasOwn({ a: 1 }, "a")); // true
console.log(Object.hasOwn({ a: 1 }, "b")); // false

/* 
Data extraction: keys(), values(), entries(), fromEntries()

Merging objects: assign() (or spread ...)

Safety: freeze()

Prototype work: create()

Existence check: hasOwn() 
*/


