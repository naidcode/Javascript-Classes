class Transaction{
  #title
  #description
  #amount
  #type
  #status
  #createdDate
  #dueDate;
  constructor(title,description,amount,type,status,createdDate,dueDate){
    this.setTitle(title)
    this.setDescription(description)
    this.setAmount(amount)
    this.setType(type)
    this.setStatus(status)
    this.setCreatedDate(createdDate)
    this.setDueDate(dueDate)
  };

  getTitle(){
    return this.#title
  }
   getDescription(){
    return this.#description
  }
   getAmount(){
    return this.#amount
  }
   getType(){
    return this.#type
  }
   getStatus(){
    return this.#status
  }
   getCreatedDate(){
    return this.#createdDate
  }
   getDueDate(){
    return this.#dueDate
  }

   setTitle(value){
    if(typeof value !== "string" || value.trim() === ""){
      throw new Error("invalid title");
    }
    this.#title = value
  }

   setDescription(value){
    if(typeof value !== "string" || value.trim() === ""){
      throw new Error("invalid description");
    }
    this.#description = value
  }

  setAmount(value){
    if(value <= 0){
      throw new Error("invalid amount");
    }
    this.#amount = value
  };

  setType(value){
    if(value !== "Income" && value !== "Expense"){
      throw new Error("invalid type");
    }
          this.#type = value
  }

  setStatus(value){
    if(value !== "Completed" && value !== "Pending"){
      throw new Error("invalid status");
    }
    this.#status = value
  }

  setCreatedDate(value){
    if(isNaN(new Date(value).getTime())){
      throw new Error("invalid Date");
    }
    this.#createdDate = value
  }

  setDueDate(value){
    if(isNaN(new Date(value).getTime())){
      throw new Error("invalid duedate");
    }
    this.#dueDate = value
  }

  markCompleted(){
    if(this.#status === "Completed"){
      console.log("Already Completed");
    }else{

      this.#status = "Completed"
    }
  }

  isOverDue(){
    let now = new Date();
    this.#status !== "Completed" && now > new Date(this.#dueDate)
  }
}

class FinanceManager{
  #transaction = [];

  static fromseed(Arrayseed){
    let manager = new FinanceManager();
    Arrayseed.forEach(transaction => manager.addTrasaction(transaction))
    return manager
  }

  addTrasaction(trasaction){
    this.#transaction.push(trasaction)
  }

  listTransactions(){
    this.#transaction.forEach((trasaction , index) => {
      console.log(`${index +1} - ${trasaction.getTitle()} - ${trasaction.getDescription()} - ${trasaction.getAmount()} - ${trasaction.getType()} - ${trasaction.getStatus()} - ${trasaction.getCreatedDate()} - ${trasaction.getDueDate()}`)
    })
  }
  calculateBalance(){
    let total = 0
    for (const transaction of this.#transaction) {
      if(transaction.getType() === "Income"){
        total += transaction.getAmount()
      } else if(transaction.getType() === "Expense"){
        total -= transaction.getAmount()
      }
      return total
    }
  }

  markTransactionCompleted(title){
  let transaction=  this.#transaction.find(t => t.getTitle() === title);
    if(!transaction){
      console.log(`Transaction with title "${title}" not found.`)
      return
    }
    try{
      transaction.markCompleted();
      console.log(`trasaction ${title} marked as completed`)
    } catch(e){
      console.log(e)
    }
  }

getOverdueTransactions(){
  let now = new Date()
  return this.#transaction.filter(t => t.getStatus() === "Completed" && now > new Date(getDueDate()))
}

removeTransaction(title){
  let index = this.#transaction.findIndex(f => f.getTitle() === title);
  if(index !== -1){
    this.#transaction.splice(index , 1)
    console.log("removed transaction" , title )
  } else{
    console.log("not found transaction")
  }
}

finalizeBalance(){
  let serviceCharges = this.calculateBalance()
  serviceCharges -= 50
  console.log("service 50 charges applied", serviceCharges)
  return serviceCharges
}
}

let seedArray = [
  new Transaction("Company", "Salary", 10000, "Income", "Completed", "2026-012-11", "2025-12-31"),
  new Transaction("Rice", "Grocery", 5000, "Expense", "Pending", "2025-10-11", "2025-10-12"),
  new Transaction("Website", "Freelance Work", 20000, "Income", "Pending", "2025-09-11", "2026-01-12"),
  new Transaction("Bills", "Electricity", 5000, "Expense", "Pending", "2025-09-11", "2025-10-05"),
]

let financeManager = FinanceManager.fromseed(seedArray);

financeManager.listTransactions()
financeManager.removeTransaction("Website")
console.log(financeManager.markTransactionCompleted("Company"))
console.log(financeManager.calculateBalance())
financeManager.finalizeBalance()

//debug code

class FinanceManagers {
  #transaction = [];

  addTransaction(transaction) {
    this.#transaction.push(transaction);
  }

  markTransactionCompleted(title) {
    const transaction = this.#transaction.find(t => t.getTitle() === title);
    if (!transaction) {
      console.log("Transaction not found");
      return;
    }
    try{
      transaction.markCompleted();
      console.log("Transaction completed successfully");
    } catch(e){
      console.log(e.message)
    }
  }
}

