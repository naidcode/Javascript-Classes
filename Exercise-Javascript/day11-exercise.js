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