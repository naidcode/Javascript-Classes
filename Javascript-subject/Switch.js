//* SWITCH = can be an efficient replacement to many if else statement


let day = "1";

switch (day) {
  case 1:
    console.log("it is Monday")
    break;
    case 2:
      console.log("it is tuesday")
      break;
      case 3:
        console.log("it is wednesday")
        break;
        case 4:
        console.log("it is thursday")
        break;
        case 5:
        console.log("it is friday")
        break;
        case 6:
        console.log("it is saturday")
        break;
        case 6:
        console.log("it is sunday")
        break;
  default:
    console.log(`${day} is not a day`)
    break;
}


let marks = 10;
let grade;

switch (true) {
  case marks >= 90:
    grade = "A"
    break;
      case marks >= 80:
    grade = "B"
    break; 
     case marks >= 60:
    grade = "C"
    break;

  default:
    grade = "F"
    break;
}

console.log(grade)