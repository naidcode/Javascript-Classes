let user = {
  name: 'Nahid pasha',
  pin: 1987,
  balance: 5000,
  isLoggedin: false,
}

//function to login

function login(inputpin) {
  if (inputpin === user.pin) {
    user.isLoggedin = true;
    console.log(`Login Successful. Welcome ${user.name} !`)
  } else{
    console.log(`incorrect pin. retry`)
  }
}

//function to check balance
function Checkbalance() {
  if (user.isLoggedin) {
    console.log(`your balance is ${user.balance}`)
  } else {
    console.log(`first login`)
  }
}

//function to withdraw money
function withdraw(amount) {
  if (user.isLoggedin){
    if(amount <= user.balance){
      user.balance = user.balance - amount;
      console.log("Withdrawn ₹" + amount + ". Remaining balance: ₹" + user.balance);
    }else {
      console.log(`insuffient balance`)
    }
  } else{
    console.log(`you must login to withdraw amount`)
  }
}
login(1987);
Checkbalance();
withdraw(4000)