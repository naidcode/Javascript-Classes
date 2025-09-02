// let fruits = ["apple", "banana"];
// fruits.unshift("mango", "grapes"); // BUG: try wrong way
// console.log(fruits);

// let nums = [1,2,3];
// let doubled = nums.map(n => n * 2);
// console.log(doubled);

// let car = { brand: "BMW", model: "X5" , color: "black" };
// console.log(car.brand);
// console.log(car["model"]);
// console.log(car["color"]);

// let student = { name: "Nahid", age: 20, score: 95 };
// for (const key in student) {
//  console.log(student[key])
// }

// let arr = [1,2,3];
// let result = arr.reduce((acc, num) => acc + num, 0);
// console.log(result);

// let numbers = [1,2,3,4,5,6,7,8,9];
// let num  = numbers.map( (item) => {
//   return item += item
// })
// console.log(num);

// let even = numbers.filter( (item) => {
//   return item % 2 ===0;
// })
// console.log(even)

// let sum = numbers.reduce( (acc , item) => acc + item)
// console.log(sum);

// let scores = { Ali: 85, Nahid: 95, Sara: 78 };

// let entry = Object.entries(scores);
// console.log(entry);

// let topper = scores[0];
// function toppers() {
//   if(scores.length > topper) {

//   }
// }
// console.log(toppers());

// let student = [];
// function addStudent(name, score) {
//   student.push({ name, score });
// }

// function viewStudents() {
//   student.forEach((students,index) => {
//     console.log(`${index + 1}. ${students.name} ${students.score}`);
//   });
// }

// function findTopper() {
//   if(student.score === 0){
//     console.log('no one is topper');
//     return
//   };

// let topper = student.reduce( (a , b) => {
//   return a.score > b.score ;

// },)
//  console.log( `${topper.name} ${topper.score}`)
// }

//   function removeStudent(name) {
//     student.filter((student) => {
//       if(name === student.name) {
//         console.log(`remove student ${name}`)
//       }
//     })
//   };

//      function avgStudent() {
//       if(student.score >= 90) {
//         console.log("A grade")
//       } else if (student.score >= 60) {
//         console.log('B grade')
//       } else if(student.score < 30) {
//         console.log('C grade')
//       }
//     }
//     addStudent("nahid" , 95);
//     addStudent("ali" , 60);
//     viewStudents();
//     findTopper();
//     removeStudent("ali")
//     avgStudent()

//   let students = [
//   { name: "Nahid", score: 95 },
//   { name: "Ali", score: 60 },
//   { name: "Sara", score: 78 },
//   { name: "Imran", score: 40 }
// ];

// function findStudent(name) {
// return  students.find(item =>  item.name === name )

// };
// console.log(findStudent("Nahid"));

// function findTopper() {
//   let topper = students.reduce( (a,b) => (a.score > b.score? a : b));
//    console.log(`${topper.name} ${topper.score}`)
// }
// findTopper();

// function sortStudents() {
//   return students.sort((item , a) => item.score - a.score );
// }
// console.log(sortStudents())

let students = [];

// 1. Add student
function addStudent(name, score) {
  students.push({ name, score });
}

function viewStudents() {
  students.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.score}`);
  });
}

function findStudent(name) {
  return students.find((student) => student.name === name);
}

function findTopper() {
  let topper = students.reduce((a, b) => (a.score > b.score ? a : b));
  console.log(`Topper: ${topper.name} with score ${topper.score}`);
}

function sortStudents() {
  let sorted = students.sort((a, b) => a.score - b.score);
  console.log("Sorted Students:", sorted);
}

function averageScore() {
  if (students.length === 0) {
    console.log("No students available");
    return;
  }
  let avg =
    students.reduce((sum, student) => sum + student.score, 0) / students.length;
  console.log(`Average Score: ${avg}`);
}

// ---- Execution ----
addStudent("Nahid", 95);
addStudent("Ali", 60);
addStudent("Sara", 78);

viewStudents();
console.log("Found:", findStudent("Nahid"));
findTopper();
sortStudents();
averageScore();
