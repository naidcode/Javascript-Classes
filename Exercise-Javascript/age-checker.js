function ageChecker(name , age) {
  let message = '';


  if(age >= 18) {
    message = name + "you are eligible for voting"
  } else {
    message = name + "you are not eligible"
  }
  console.log(message)
}
ageChecker("Nahid" , 18)