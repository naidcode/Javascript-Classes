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

  addMember(name , email){
    if(this.#members.has(name)){
      console.log("member already exist")
      return;
    } else{
      this.#members.set(name, {email , borrowedbook: new Set()})
      console.log("Member successfully added")
    }
  }

  removeMember(name){
    if(this.#members.has(name)){
      this.#members.delete(name)
      console.log("member removed successfully")
    } else{
      console.log("member not found!")
    }
  }

  borrowBook(name , bookTitle){
    if(!this.#members.has(name)){
      console.log("member not found!")
      return
    }

    let member = this.#members.get(name)
    if(member.borrowedbook.has(bookTitle)){
      console.log(`${bookTitle} already exist`)
    } else{
      member.borrowedbook.add(bookTitle)
      console.log(`${bookTitle} borrowed successfully`)
    }
  }

  returnBook(name , bookTitle){
    if(!this.#members.has(name)){
      console.log("not found!");
      return
    }

    let member = this.#members.get(name);
    if(member.borrowedbook.has(bookTitle)){
      member.borrowedbook.delete(bookTitle)
      console.log("borrowed book return successfully")
    } else{
      console.log("book not found!")
    }
  }

  listMember(){
    if(this.#members.size ===0){
      console.log("member not found!")
      return
    } else{
      this.#members.forEach((i ,name) => {
        console.log(`name: ${name} email: ${i.email}`)
      })
    }
  }

  listBook(bookTitle){
    let found = false;
    this.#members.forEach((member , name) => {
      if(member.borrowedbook.has(bookTitle)){
        console.log(`${bookTitle} borrowed By ${name}`)
        found = true
      } 
    })

    if(!found){
      console.log("not found!")
    }
  }
}


const myTracker = new MemberBookTracker();

myTracker.addMember("John Doe", "john@example.com");
myTracker.addMember("Jane Smith", "jane@example.com");

myTracker.borrowBook("John Doe", "JavaScript Basics");
myTracker.borrowBook("Jane Smith", "Python Programming");
myTracker.borrowBook("John Doe", "JavaScript Basics"); // Duplicate

myTracker.listMember();
myTracker.listBook("JavaScript Basics");

myTracker.returnBook("John Doe", "JavaScript Basics");
myTracker.returnBook("John Doe", "JavaScript Basics"); // Already returned

myTracker.listBook("JavaScript Basics");
