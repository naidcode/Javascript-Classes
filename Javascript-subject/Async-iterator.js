const asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "first";
    await new Promise(r => setTimeout(r, 1000));
    yield "second";
    await new Promise(r => setTimeout(r, 1000));
    yield "third";
  }
};

(async () => {
  for await (const item of asyncIterable) {
    console.log(item); // prints with 1s delay: first, second, third
  }
})();



/**
 Symbol.asyncIterator

Symbol.iterator → makes objects work with for...of.
Symbol.asyncIterator → makes objects work with for await...of.
 */

//Example 

let symbolite = {
  start: 1,
  end: 5,

  [Symbol.asyncIterator](){
    let current = this.start
    let end = this.end

    return {
      async next(){
        if(current <= end){
          await new Promise(r => setTimeout(r , 500))
          return {value: current++ , done: false}
        }
          return{ done: true}
        }
      };
    }
  };


(async () => {
  for await (let num of symbolite) {
    console.log(num); // prints 1, 2, 3 with delay
  }
})();

//Async iterator with generator 

let symbolites = {
  start: 1,
  end: 5,

  async *[Symbol.asyncIterator]() {
    let current = this.start;
    let end = this.end;

    while (current <= end) {
      await new Promise(r => setTimeout(r, 500)); // simulate delay
      yield current++;
    }
  }
};

(async () => {
  for await (let num of symbolites) {
    console.log(num); // 1, 2, 3, 4, 5 (with 0.5s delay each)
  }
})();



/**
 Difference between for...of and for await...of

Feature	for...of	for await...of
Works with       -	   Synchronous iterables ([Symbol.iterator])	-      Asynchronous iterables ([Symbol.asyncIterator])
Values returned	 -    Direct values	                              -   Promises that must be awaited
When to use      -   Arrays, Sets, Maps, Strings	                -   APIs, streams, databases, delayed values
 */