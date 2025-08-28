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



// let movies = [] ;

// function addMovies(title , rating , year) {
//   movies.push({title , rating , year})
// }

// function viewMovies() {
//   movies.forEach((movie , index) => {
//     console.log(`${index + 1} - ${movie.title} - ${movie.rating} - ${movie.year}`)
//   })
// }

// function findMovie(title) {
// let find =   movies.find(movie =>  movie.title === title);
// console.log(find);
// }

// function sortMovie() {
// let sort = movies.sort(( a , b) => a.rating - b.rating);
// console.log(sort);
// }

// function highRated() {
//   let high = movies[0];
//   movies.forEach(movie => {
//     if(movie.rating > high.rating)
//     high = movie;
//   });
//   console.log(`${high.title} ${high.rating}`)
// };

// function olderMovie() {
// let older =   movies.some(movie => movie.year > 2000)
// console.log(older);
// }

// function above5Rating() {
//   let above5Rating = movies.every(movie => movie.rating >= 5);
//   console.log(above5Rating)
// }
// function averageRating() {
//   let avg = movies.reduce((a,b) => a + b.rating , 0) / movies.length;
// console.log(avg);
// }

// function movieReport() {
//   let moviesReleased = movies.filter( (movie) => movie.year > 2010);
//   console.log(`movies released after 2010 ${moviesReleased}`);

//   let sort = movies.sort((a,b) => a.rating - b.rating);
//   console.log(sort);

//   let top5 = [...movies].sort((a,b) => b.rating - a.rating).slice(0,5);
//   console.log(top5);

  


//   let avg = top5.reduce((a,b) => a + b.rating , 0) / top5.length;
//   console.log("Top 5 Movies After 2010:");
//   movies.forEach((line, index) => console.log(`${index + 1}. ${line}`));
//   console.log("Average Rating:", avg.toFixed(1));
//   let show = top5.map(movie => (`${movie.title} - ${movie.rating} - ${movie.year}`));
//   console.log(show)
// }



// addMovies("AOT" , 9.5 , 2014);
// addMovies("money heist" , 9 , 2015);
// addMovies("stranger thing" , 8 , 2020);
// addMovies("sex education" , 8.5 , 2023);
// addMovies("96" , 7.5 , 2024);
// addMovies("life beautiful" , 5 , 2025);
// addMovies("pursuit of happyness" , 7.5 , 2021);

// viewMovies()
// findMovie("96");
// sortMovie();
// highRated();
// olderMovie();
// above5Rating();
// averageRating();
// movieReport()


let students = [
  { name: "Nahid", marks: 95 },
  { name: "Fazil", marks: 90 },
  { name: "Fouzi", marks: 85 },
  { name: "Shahid", marks: 80 },
  { name: "Sahil", marks: 30 },
  { name: "Faizan", marks: 50 }
];


function studentreport() {
  let sort = students.sort((a,b) => b.marks - a.marks);
  let top3 =   sort.slice(0,3);
  let report = top3.map(student => `${student.name} ${student.marks}`);

  let avg = students.reduce((a,b) => a + b.marks , 0 ) / students.length;
  let allstudent = students.every(student => student.marks >= 35);

  console.log(`top 3 students`);
  report.forEach((student , index) => console.log(`${index + 1} -  ${student}`));

    console.log("avrage marks" , avg.toFixed(1),"%");
    console.log("all student passed? " , allstudent ? "yes" : "no")
  

}

studentreport()
