class ContactBook{
    #contacts = new Map()

    addContact(name , phone, email){
      if(this.#contacts.has(name)){
        console.log(`${name} already there`)
        return
      } 
      this.#contacts.set(name , {phone ,email});
      console.log(` ${name} added successfully`)
    }

    removeContact(name){
      if(this.#contacts.has(name)){
        this.#contacts.delete(name)
        console.log(`${name} removed successfully`)

      } else{
        console.log(`contact ${name} not found`)
      }
    } 

    listContact(){
      if(this.#contacts.size === 0){
        console.log("list not have")
      } else{
        this.#contacts.forEach((i , name) => {
          console.log(`Name: ${name} - Phone: ${i.phone} - Email: ${i.email}`)
        })
      }
    }

    getContact(name){
      if(this.#contacts.has(name)){
      let info =   this.#contacts.get(name)
        console.log(`${name} - ${info.phone} - ${info.email}`)
      } else{
        console.log("conatct not found")
      }
    }

}


const myContacts = new ContactBook();

myContacts.addContact("John Doe", "1234567890", "john@example.com");
myContacts.addContact("Jane Smith", "9876543210", "jane@example.com");


myContacts.listContact()
myContacts.removeContact("John Doe")
myContacts.getContact("Jane Smith")
myContacts.listContact()


//debug 

const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add(1);

console.log(mySet.size);
console.log(mySet.has(1));
console.log(mySet.has(3));

mySet.delete(5);
console.log(mySet.size);



// another project
class MemberBookTracker {
  #members = new Map();

  addMember(name, email) {
    if (this.#members.has(name)) {
      console.log("Member already exists");
      return;
    } else {
      this.#members.set(name, { email, borrowedbook: new Set() });
      console.log(`${name} added successfully`);
    }
  }

  removeMember(name) {
    if (this.#members.has(name)) {
      this.#members.delete(name);
      console.log(`${name} removed successfully`);
    } else {
      console.log("Member not found");
    }
  }

  borrowBook(name, booktitle) {
    if (!this.#members.has(name)) {
      console.log("Member not found");
      return;
    }

    let member = this.#members.get(name);

    if (member.borrowedbook.has(booktitle)) {
      console.log(`${booktitle} is already borrowed`);
    } else {
      member.borrowedbook.add(booktitle);
      console.log(`${booktitle} borrowed successfully`);
    }
  }

  returnBook(name, booktitle) {
    if (!this.#members.has(name)) {
      console.log("Member not found");
      return;
    }

    let member = this.#members.get(name);

    if (member.borrowedbook.has(booktitle)) {
      member.borrowedbook.delete(booktitle);
      console.log(`${booktitle} returned successfully`);
    } else {
      console.log(`No record of ${booktitle} being borrowed`);
    }
  }

  listMember() {
    if (this.#members.size === 0) {
      console.log("No members found");
    } else {
      this.#members.forEach((member, name) => {
        console.log(`Name: ${name} - Email: ${member.email}`);
      });
    }
  }

  listBooks(booktitle) {
    let found = false;
    this.#members.forEach((member, name) => {
      if (member.borrowedbook.has(booktitle)) {
        console.log(`${booktitle} is borrowed by ${name}`);
        found = true;
      }
    });
    if (!found) {
      console.log("Book not found");
    }
  }
}

// Example usage:

const myTracker = new MemberBookTracker();

myTracker.addMember("John Doe", "john@example.com");
myTracker.addMember("Jane Smith", "jane@example.com");

myTracker.borrowBook("John Doe", "JavaScript Basics");
myTracker.borrowBook("Jane Smith", "Python Programming");
myTracker.borrowBook("John Doe", "JavaScript Basics"); // Duplicate

myTracker.listMember();
myTracker.listBooks("JavaScript Basics");

myTracker.returnBook("John Doe", "JavaScript Basics");
myTracker.returnBook("John Doe", "JavaScript Basics"); // Already returned

myTracker.listBooks("JavaScript Basics");
