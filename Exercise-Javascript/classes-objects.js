class attandence {
  present() {
    console.log(this.name + "present" + " and his roll no is " + this.roll);
  }
  absent() {
    console.log(this.name + "absent" + " and his roll no is " + this.roll);
  }
  fill(studentName , rollNo) {
    this.name = studentName;
    this.roll = rollNo;
  }

  
}

let nahid = new attandence();
nahid.fill("nahid is ", 10);
let shahid = new attandence();
shahid.fill("shahid is ", 12);
let sahil = new attandence();
sahil.fill("sahil is ", 35);
let fazil = new attandence();
fazil.fill("fazil is ", 13);

nahid.absent();
shahid.present();
sahil.absent();
fazil.present();
