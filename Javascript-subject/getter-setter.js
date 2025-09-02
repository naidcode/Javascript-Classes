//getter and setter

// getter: special method that makes a property readable.
// setter: special method that makes a property writeable.


// class student{
//   constructor(name){
//     this.name = name
//   }

//   presents(){
//         console.log(`i'm a student`);

//   }

//   get name(){
//   return  this._name 
//   }

//   set name(newNmae){
//     this._name = newNmae
//   }

// };

// let stu  = new student("nahid");
// stu.presents();
// console.log(stu.name);
// stu.name = "fazil";
// console.log(stu.name);

class Namenaam{
  constructor(firstName , lastName , age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  };

  
  set firstname(newFirstName){
    if(typeof newFirstName === "string" && newFirstName.length > 0){
       this._firstName = newFirstName;
    }else{
      console.log("name must be in string")
    }
  }

  set lastName(newLastName){
    if(typeof newLastName === "string" && newLastName.length > 0){
       this._lastName = newLastName;
    }else{
      console.log("name must be in string")
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    } else{
      console.log("age must be in numbers")
    }
  };

  // get firstName(){
  //   return this._firstName
  // }

    get lastName(){
    return this._lastName
  }

  get fullName() {
    return this._firstName + this._lastName
  }

    get age(){
    return this._age;
  }
}

let n = new Namenaam("Nahid" , "pasha", 20);


console.log(n.firstName)
console.log(n.lastName);
console.log(n.fullName);
console.log(n.age)
