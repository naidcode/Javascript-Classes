// debug code 
class Wallet {
  #balance;
  
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  
  addMoney(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
    this.#balance += amount;
  }
  
  spendMoney(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }
  
  getBalance() {
    return this.#balance;
  }
}

const myWallet = new Wallet(100);

try {
  myWallet.addMoney(50);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  setTimeout(() => {
    console.log("Final Balance:", myWallet.getBalance());
  }, 1000);
}
class Calculator {
  add(a, b) {
    return a + b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.divide(10, 10));


// // Mini Project 

// class Transaction {
//   #description;
//   #amount;
//   #date;
//   #type;

//   constructor(description, amount, type, date) {
//     this.setDescription(description);
//     this.setAmount(amount);
//     this.setType(type);
//     this.#date = date;
//   }

//   getDescription() {
//     return this.#description;
//   }

//   getAmount() {
//     return this.#amount;
//   }

//   getType() {
//     return this.#type;
//   }

//   getDate() {
//     return this.#date;
//   }

//   setDescription(value) {
//     if (typeof value !== "string" || value.trim() === "") {
//       throw new Error("Invalid description");
//     }
//     this.#description = value;
//   }

//   setAmount(value) {
//     if (typeof value !== "number" || value <= 0) {
//       throw new Error("Invalid amount");
//     }
//     this.#amount = value;
//   }

//   setType(value) {
//     if (value !== "Income" && value !== "Expense") {
//       throw new Error("Invalid type");
//     }
//     this.#type = value;
//   }
// }

// class FinanceManager {
//   #transactions = [];

//   static fromSeed(seedArray) {
//     const manager = new FinanceManager();
//     seedArray.forEach(transaction => manager.addTransaction(transaction));
//     return manager;
//   }

//   addTransaction(transaction) {
//     this.#transactions.push(transaction);
//   }

//   listTransactions() {
//     this.#transactions.forEach((t, index) => {
//       console.log(
//         `${index + 1}. ${t.getDescription()} - ₹${t.getAmount()} - ${t.getType()} - ${t.getDate()}`
//       );
//     });
//   }

//   calculateBalance() {
//     let total = 0;
//     for (const transaction of this.#transactions) {
//       if (transaction.getType() === "Income") {
//         total += transaction.getAmount();
//       } else if (transaction.getType() === "Expense") {
//         total -= transaction.getAmount();
//       }
//     }
//     return total;
//   }

//   simulateSave(transaction, callback) {
//     setTimeout(() => {
//       this.#transactions.push(transaction);
//       callback();
//     }, 1000);
//   }
// }

// // Sample data
// const seedArray = [
//   new Transaction("Salary", 10000, "Income", "2025-09-11"),
//   new Transaction("Groceries", 5000, "Expense", "2025-09-11"),
//   new Transaction("Freelance", 8000, "Income", "2025-09-11"),
//   new Transaction("Electricity Bill", 3000, "Expense", "2025-09-11"),
// ];

// // Initialize FinanceManager
// const financeManager = FinanceManager.fromSeed(seedArray);

// // List transactions
// financeManager.listTransactions();

// // Show balance
// console.log("Total Balance:", financeManager.calculateBalance());



class Transaction{
  #title
  #description
  #status
  #createdDate
  #dueDate
  #type
  #amount
  constructor(title, description,amount,type,status = "Pending",createdDate,dueDate){
    this.#title = title,
    this.#description = description,
    this.#status = status,
    this.#createdDate = createdDate,
    this.#dueDate = dueDate,
    this.#amount = amount,
    this.settype(type);

  }


  getTitle(){
    return this.#title
  }

  getamount(){
    return this.#amount
  }

  gettype(){
    return this.#type
  }
   getdescription(){
    return this.#description
  }

   getstatus(){
    return this.#status
  }

   getcreatedDate(){
    return this.#createdDate
  }

  getdueDate(){
    return this.#dueDate
  };

  settitle(value){
    if(typeof value !== "string" && value.trim() === ""){
      throw new Error("invalid title");
    }
    this.#title = value
  };

  setamount(value){
    if(value <= 0){
      throw new Error("invalid amount")
    }
    this.#amount = value
  };

  settype(value){
    if(value !== "Income" && value !== "Expense"){
      throw new Error("invalid type");
    }
    this.#type = value
  }

  setDescription(value){
    if(typeof value !== "string" && value.trim() === ""){
      throw new Error("invalid title");
    }
    this.#description = value
  };

  setstatus(value){
    if(value !== "Process" && value !== "Completed"){
      throw new Error("invalid status!");
    }
    this.#status = value
  };

  setdueDate(value){
    if (isNaN(new Date(value))) {
  throw new Error("invalid Date!");
}

    this.#dueDate = value
  };

  markCompleted(){
    if(this.#status === "Completed"){
      throw new Error("already completed"); 
    }
    this.#status = "Completed";
  };

  isoverDue(){
    let now = new Date()
    if(this.#status !== "Completed" && now > new Date(this.#dueDate)){
  return true;
} else {
  return false;
}

  }
};

class FinanceManagers {
  #transaction = [];

  static fromSeed(seedArray) {
    let manager = new FinanceManagers();
    seedArray.forEach(transaction => manager.addTransaction(transaction));
    return manager;
  }

  addTransaction(transaction) {
    this.#transaction.push(transaction);
  }

  listTransactions() {
    this.#transaction.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.getTitle()} - ${transaction.getdescription()} - ${transaction.getstatus()} - ${transaction.getdueDate()} - ${transaction.getcreatedDate()}`);
    });
  }

  calculateBalance() {
    let total = 0;
    for (const transaction of this.#transaction) {
      total = this.processTransaction(transaction, total);
    }
    return total;
  }

  simulateSave(transaction, callback) {
    setTimeout(() => {
      this.#transaction.push(transaction);
      callback();
    }, 1000);
  }

  processTransaction(transaction, total) {
    if (transaction.gettype() === "Income") {
      total += transaction.getamount();
    } else if (transaction.gettype() === "Expense") {
      total -= transaction.getamount();
    }
    return total;
  }
}


let seedArray = [
  new Transaction("Company", "Salary", 10000, "Income", "Completed", "2025-09-11", "2025-12-31"),
  new Transaction("Rice", "Grocery", 5000, "Expense", "Pending", "2025-10-11", "2025-10-12"),
  new Transaction("Website", "Freelance Work", 20000, "Income", "Pending", "2025-09-11", "2026-01-12"),
  new Transaction("Bills", "Electricity", 5000, "Expense", "Pending", "2025-09-11", "2025-10-05"),
];

const financeManager = FinanceManagers.fromSeed(seedArray);

financeManager.listTransactions();
console.log("Balance:", financeManager.calculateBalance());
