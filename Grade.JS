let student = {
  maths: 40,
  science: 100,
  computer: 100,
}

function calculateGrade() {
  const Grade = student.computer + student.maths + student.science ;
  const total = Grade /3;
   if (total >= 90){
    console.log("A Grade Great Jod!")
  } else if (total >= 75) {
    console.log("B Grade Not Bad")
  } else if (total >= 50) {
    console.log("C Grade Need to improve")
  } else if(total <= 50) {
    console.log("F Grade your are good student what happen to you")
  } 
}

calculateGrade(student) // b Grade Not Bad output

//not perfect but next time i will do my best thank you
