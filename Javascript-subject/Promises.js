function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let waldoged = true;
      if(waldoged){
         resolve("let walk the dog")
      } else{
        reject("not done yet")
      }
        }, 1500);
    
  })
}
function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cleaned = true;
      if(cleaned){
         resolve("done!")
      } else{
        reject("not done")
      }
    }, 2500);
    
  })
}

function trash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let trashed = false;
      if(trashed){
         resolve("done!")
      } else{
        reject("not done yet")
      }
    }, 500);  
  })
}

walkDog().then(value => {console.log(value); return clean()})
         .then(value => {console.log(value); return trash()})
         .then(value => {console.log(value); return console.log("i finished my work")})
         .catch(error => console.error(error))
