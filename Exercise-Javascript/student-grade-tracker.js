// let students = [];

// function addStudent(name , marks) {
//   students.push({name , marks})
// }

// function viewStudents() {
//   students.forEach( (student , index) => {
//     console.log(`${index + 1 } ${student.name} ${student.marks}`)
//   })
// }

// function findStudent(name) {
// return students.find((find) => find.name === name );
// }


// function sortStudents() {
//   let sort = students.sort((a , b) => a.marks - b.marks);
//   console.log(sort);
// }

// function findTopper() {
//   let topper = students[0];
//   students.forEach( (student) =>{
//     if(student.marks >  topper.marks) {
//       topper = student
//     }
//   });
//   console.log(`the topper student is ${topper.name} - ${topper.marks}`)
// }

// function checkFail() {
//   let fail =  students.some(student => student.marks <= 35);
//   console.log(fail)
// }

// function checkPass() {
// let pass=   students.every( (student) =>  student.marks > 35 )
//   console.log(pass)
// }

// function totalAverage() {
//   let avg = students.reduce((a , b) => a + b.marks , 0) / students.length;
//   console.log(`student average ${avg}`)
// }

// addStudent("nahid" , 95);
// addStudent("fazil" , 90);
// addStudent("fouzi" , 85);
// addStudent("shahid" , 80);
// addStudent("sahil" , 30);
// addStudent("faizan" , 50);

// viewStudents();
// console.log(findStudent("sahil"));
// sortStudents();
// findTopper();
// checkFail();
// checkPass()
// totalAverage();


// let student = [
//   { name: "Nahid", marks: 95 },
//   { name: "Fazil", marks: 90 },
//   { name: "Fouzi", marks: 85 },
//   { name: "Shahid", marks: 80 },
//   { name: "Sahil", marks: 30 },
//   { name: "Faizan", marks: 50 }
// ];


// let name = student.map(value => value.name);
// console.log(name);

// let mark = student.map(value => value.marks);
// console.log(mark);

// student.forEach(value => console.log(`${value.name } ${value.marks}`));
// let total = 0
// student.forEach(student => console.log(total += student.marks));

// let totals = student.reduce((a,b) => a + b.marks , 0);
// console.log(totals)