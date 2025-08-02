function oddevenChecker(number) {
  let result = '';
  if (number % 2 === 0) {
    result = number + " the number is even"
  } else {
    result = number + " the number is odd"
  }
  console.log(result);
}

oddevenChecker(10) //Answer is even
oddevenChecker(7) //Answer id odd