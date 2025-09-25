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

