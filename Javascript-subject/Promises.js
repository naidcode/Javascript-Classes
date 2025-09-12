function walkDog(call) {
  setTimeout(() => {
    console.log("let walk the dog")
    call()
  }, 1500);
}
function clean(call) {
  setTimeout(() => {
    console.log("let clearn the kitchen");
    call()
  }, 2500);
}

function trash(call) {
  setTimeout(() => {
    console.log("let put the trash in the truck")
    call()
  }, 500);
}

walkDog(() => {
  clean(()=>{
    trash(()=>{
      console.log("you finished the tasks")      // callback hell
    })
  })
})