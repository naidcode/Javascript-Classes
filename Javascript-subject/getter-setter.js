//getter and setter

class student{
  constructor(name){
    this.name = name
  }

  presents(){
        console.log(`i'm a student`);

  }

  get name(){
  return  this._name 
  }

  set name(newNmae){
    this._name = newNmae
  }

};

let stu  = new student("nahid");
stu.presents();
console.log(stu.name);
stu.name = "fazil";
console.log(stu.name);
