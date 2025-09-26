function* num(){
  console.log("starting 1")
  yield 1
  console.log("starting 2")
  yield 2
  console.log("starting 3")
  yield 3
  console.log("starting 4")
  yield 4
}

const generator = num()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.return(5)) // no code is executed returns { value: 5, done: true}


//From within a generator function, the control can be delegated to another generator function using yield*.

function* gi(){
  yield 2
  yield 3
  yield 4
}

function* g2(){
  yield 1
  yield* gi();
  yield 5
}

let generators = g2()

console.log(generators.next())
console.log(generators.next())
console.log(generators.next())
console.log(generators.next())
console.log(generators.next())
console.log(generators.return(6))

//iterator

function* range(n){
  for (let i = 1; i < n; i++) {
    yield i
  }
}


let gen = range(10)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.return(10))







