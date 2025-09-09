// // Debug code 
// class User {
//   #age;

//   constructor(name, age) {
//     this.name = name;
//     this.setAge(age);
//   }

//   setAge(age) {
//     if (age < 0) {
//       throw new Error("Age cannot be negative");
//     }
//     this.#age = age;
//   }

//   getAge() {
//     return this.#age;
//   }
// }

// try {
//   let user = new User("John", -5);
// console.log(user.getAge());

// } catch (error) {
//   console.log(error.message)
// }

// try {
//   let validuser = new User("John", 5);
// console.log(validuser.getAge());

// } catch (error) {
//   console.log(error.message)
// }

// class Employee{
//   #salary;
//   constructor(name, salary,department){
//     this.name =  name,
//     this.department = department,
//     this.setSalary(salary);
//   };

//   getSalary(){
//     return this.#salary
//   };

//   setSalary(salary){
//     if(salary <= 0){
//       throw new TypeError("invalid salary");
//     }
//      this.#salary = salary
//   }

//   discount(){
//     return this.getSalary();
//   }
// };

// class Manager extends Employee{
//   constructor(name , salary ,department){
//     super(name, salary ,department);
//   }



//   discount(){
//     return this.getSalary() * 0.80;
//   };


// }

// class Intern extends Employee{
//   constructor(name , department , stipend){
//     super(name, department, stipend);
//     this.stipend = stipend
//   };

//   getSalary(){
//     return this.stipend;
//   }
// };

// let manager = new Manager("John Doe", 50000, "Engineering");
// let intern = new Intern("Jane Smith", "Marketing", 10000);


// console.log("Manager Salary:", manager.getSalary());           // Should print 50000
// console.log("Manager Discounted Salary:", manager.discount()); // Should print 40000

// console.log("Intern Salary:", intern.getSalary());             // Should print 10000
// console.log("Intern Discounted Salary:", intern.discount());   // Should print 10000 (no discount applied)


// // logic exercise

// let arr = [1, 2, 4, 5];

// let n =  arr.length + 1;
// for (let index = 1; index < n; index++) {
//   let found = false

//   for (let j = 0; j < arr.length; j++) {
//   if(arr[j] === index){
//     found = true;
//     break;
//   }
  
// }

// if(!found){
//   console.log("miss number is:" , index)
//   break;
// }
// };



