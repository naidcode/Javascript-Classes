function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let waldoged = true;

      if (waldoged) {
        resolve("let walk the dog");
      } else {
        reject("not done yet");
      }
    }, 1500);
  });
}
function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cleaned = false;
      if (cleaned) {
        resolve("done!");
      } else {
        reject("not done");
      }
    }, 2500);
  });
}

function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let trashed = true;
      if (trashed) {
        resolve("done!");
      } else {
        reject("not done yet");
      }
    }, 500);
  });
}

walkDog()
  .then(value => {
    console.log(value);
    return clean();
  })
  .then((value) => {
    console.log(value);
    return trash();
  })
  .then((value) => {
    console.log(value);
    return console.log("i finished my work");
  })
  .catch((error) => console.error(error))
  .finally(() => console.log("always run the code "))


function learn() {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      let sum = 1+1;
      if(sum <3){
        resolve("correct")
      } else{
        reject("incorrect")
      }
    }, 5000);
  })
}
 

  learn().then(value => console.log(`yes ${value}`))
  .catch(error => console.log(`yes ${error}`))

  function Task(name ,time) {
    return new Promise((resolve , reject)=>{
      setTimeout(() => {
        resolve(`${name} completed`)
      }, time);
    })
  }

  Promise.all ([                                     // promise.all take all argument 
    Task("nahid1" , 2000),
    Task("nahid 2" , 1000),
    Task("nahid 3" , 2500)
  ]).then(value => console.log(value)).catch(console.log("nooo! "))


    Promise.race ([                                     // promise.race only take which comes first
    Task("nahid1" , 2000),
    Task("nahid 2" , 1000),
    Task("nahid 3" , 2500)
  ]).then(value => console.log(value)).catch(console.log("nooo! "))
  