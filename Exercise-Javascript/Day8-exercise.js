//inheritance exercise 

class Person{
  #salary;
  constructor(name , age , salary){
    this.name = name,
    this.age = age,
    this.#salary = salary
  }

  set salary(value){
    if(value > 0){
       this.#salary = value;
    } 
      throw new Error("invalid amount");

  }

  get salary(){
    return this.#salary
  }

  Introduce(){
    throw new Error("Implement in sub class");
    
  }
}

class Student extends Person{
  Introduce(){
    console.log(`my name is ${this.name} and my age is ${this.age}`)
  }
}

class Teacher extends Person{
  Introduce(){
    console.log(`my name is ${this.name} and my age is ${this.age} , and my salary is ${this.salary}`)
  }
}

function personMethod(person){
  person.Introduce()
}

let student = new Student("Nahid pasha" , 20);
let teacher = new Teacher("Salma" , 30 , 50000);

personMethod(student)
personMethod(teacher);



class Employee{
  #salary;
  constructor(name , department ,salary){
    this.name= name,
    this.department = department,
    this.#salary = salary
  };

  get salary(){
    return this.#salary
  };

  set salary(value){
    if(value >= 0){
      this.#salary = value
    } else{
      throw new Error("invalid salary");
    }
  }

  getRole(){
    throw new Error("implement this role in subclasses");
    
  }
}

class Manager extends Employee{
  getRole(){
    console.log(`hello my name is ${this.name} and i'm from ${this.department} department and my salary is ${this.salary}`)
  };

  assignaTask(task){
    console.log(`i do ${task} in company`)
  }
};

class Intern extends Employee{
   getRole(){
    console.log(`hello my name is ${this.name} and right now i'm ${this.department} in company and my salary is ${this.salary}`)
  };

  requestHelp(name){
    console.log(`sir, ${name} help me in this program `)
  }
}

let manager = new Manager("nahid pasha", "Data Analysing",60000);
let intern = new Intern("Faizan", "Intern" , 30000);

manager.getRole();
manager.assignaTask("management task");
intern.getRole();
intern.requestHelp("nahid pasha");

