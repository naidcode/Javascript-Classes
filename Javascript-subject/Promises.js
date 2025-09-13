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

  async function Done() {
    try{

      let Dogwalk = await walkDog();      // Async method to clean and easy way.
      console.log(Dogwalk);
  
       await clean();
      
  
      let trash = await trash();
      console.log(trash);
    } catch(e){
      console.log(e)
    }
  } 
  console.log(Done())

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
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(`${name} completed`)
        reject("noo nahid pasha")
      }, time);
    })
  }

  Promise.all ([                                     // promise.all take all argument 
    Task("nahid1" , 2000),
    Task("nahid 2" , 1000),
    Task("nahid 3" , 2500)
  ]).then(value => console.log(value)).catch(value => console.log( value))


    Promise.race ([                                     // promise.race only take which comes first
    Task("nahid1" , 2000),
    Task("nahid 2" , 1000),
    Task("nahid 3" , 2500)
  ]).then(value => console.log(value)).catch(console.log("nooo! "))
  

// Promise.allSettledd

/*
➤ Why use it
You want to know the result of every promise, regardless of success or failure.
Useful when tasks are independent and you need a complete report of their outcomes.

➤ Returned format
Each result is an object with:
status: "fulfilled" or "rejected"
value: result if fulfilled
reason: error if rejected*/ 

  const promise1 = Promise.resolve("Success 1");
const promise2 = Promise.reject("Error 2");
const promise3 = Promise.resolve("Success 3");

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Promise ${index + 1} succeeded with`, result.value);
      } else {
        console.log(`Promise ${index + 1} failed with`, result.reason);
      }
    });
  });

  const promise4 = Promise.reject("Error 1");
const promise5 = Promise.reject("Error 2");
const promise6 = Promise.resolve("Success 3");

Promise.any([promise4, promise5, promise6])
  .then(result => {
    console.log("First fulfilled result:", result);
  })
  .catch(error => {
    console.error("All promises failed:", error.errors);
  });


