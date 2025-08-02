function passwordStrength(password) {
  let result = '';
  
  if (password.length >= 8 ) {
    result = ` is strong`
  } else if (password.length >= 5  ) {
    result = ` is medium`
  } else {
    result = ` too weak`
  }
  console.log(`your password is: ${result}`)
}

passwordStrength('13456785')