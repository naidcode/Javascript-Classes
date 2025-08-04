let Studentid = {
  name: 'Nahid Pasha',
  maths: 60,
  science: 100,
  computer: 90,
}

function Grade(score) {
  if (score >= 80 && score <= 100) {
    console.log('A Grade')
  } else if (score >= 60 && score <= 79) {
    console.log('B Grade')
  } else {
    console.log('C Grade Need to improve')
  }
}

let total = Studentid.computer + Studentid.maths + Studentid.science;
let average = (total / 3).toFixed(2);

console.log(`${Studentid.name} you Scored  ${average} %`);
Grade(average);