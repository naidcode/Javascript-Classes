function lengthChecker(name) {
  let isValid;


      if (name >= 3 && name <= 15) {
        isValid = !false
      } else {
        isValid = !true
      }


      if (isValid === !false) {
        console.log(`your name is valid`)
      } else  {
        console.log("your name is in valid")
      }


}
lengthChecker("Nahid pasha")