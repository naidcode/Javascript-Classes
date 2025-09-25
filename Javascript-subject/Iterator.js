/**
 An iterator is an object that defines a next() method.

next() returns { value, done }.
done: true → iteration finished.
 */


function Create(array){
  let index = 0

 return  {
    next: function () {
      if(index < array.length){
        return {value: array[index++] , done: false}
      } else{
        return {value: undefined , done: true}
      }
    }
  };
}

let it =  Create([10,20,30]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


/**
 🔹 Making Objects Iterable with [Symbol.iterator]
Built-in structures like Arrays, Maps, and Sets already implement [Symbol.iterator].
You can make your own object iterable.
 */
let range = {
  start: 1,
  end: 5,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num); // 1, 2, 3
}


/**
 🔹 Generator Functions (function* and yield)

A generator function returns an iterator.
Use yield to pause execution and return a value.
Use .next() to resum
 */

function* myGenerator() {
  yield 10;
  yield 20;
  yield 30;
}

let gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


function* createfunc(arr){
  let id = 1
  while (true) {
    yield id
    id++
  }
}

let a = createfunc()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.return(10))
console.log("next answer ")
function* numbers() {
  yield 10;
  yield 20;
  yield 30;
}

const iterator = numbers();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

class PaginatedUsers {
  constructor(users) {
    this.users = users;
    this.index = 0;
  }

  [Symbol.iterator]() {
    return {
      users: this.users,
      index: this.index,
      next() {
        if (this.index < this.users.length) {
          return { value: this.users[this.index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

// Example data
const users = new PaginatedUsers(["Alice", "Bob", "Charlie"]);

for (let user of users) {
  console.log(user);
}
// Alice
// Bob
// Charlie



function Iterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      if (nextIndex < array.length) {
        return {value: array[nextIndex++],done: false,};
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}

const array = [1, 2, 3, 4, 5];
const arrayValue = Iterator(array);

console.log(arrayValue.next()); // { value: 1, done: false }
console.log(arrayValue.next()); // { value: 2, done: false }
console.log(arrayValue.next()); // { value: 3, done: false }
console.log(arrayValue.next()); // { value: 4, done: false }
console.log(arrayValue.next()); // { value: 5, done: false }
console.log(arrayValue.next()); // { value: undefined, done: true }
