class attandence {
  constructor(studentName , rollNo) {
    console.log(this.name + this.roll)
    this.name = studentName;
    this.roll = rollNo;
  }
  present() {
    console.log(this.name + "present" + " and his roll no is " + this.roll);
  }
  absent() {
    console.log(this.name + "absent" + " and his roll no is " + this.roll);
  }
  

}

let nahid = new attandence("nahid is ", 10)
let shahid = new attandence("shahid is ", 12);
let sahil = new attandence("sahil is ", 35);
let fazil = new attandence("fazil is ", 13);
nahid.absent();
shahid.present();
sahil.absent();
fazil.present();

