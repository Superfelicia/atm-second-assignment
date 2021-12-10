// BANK ACCOUNT

// You should also do some research why parseFloat() is used here.

// parseFloat() will return NaN if it cannot convert the first character
// it will ignore white spaces in between and after a sentence or number
// it will only return the first number in a string and ignore the rest
// it is required a value to parse (?)


// OBJECT
const account = {
  accountName: "Felicia Ahlström",
  balance: 100,
  getBalance: function () {
    alert(`Current balance: ${this.balance}`);
    atm();
    // atm() makes the starter function run again, so that we go back to choice menu
  },
  deposit: function () {
    let depositAmount = parseFloat(prompt("How much would you like to deposit?"));
    if (depositAmount <= 0 || isNaN(depositAmount)) {
      this.accountError();
      this.deposit();
      // this.deposit makes the function run again
    } else {
      this.balance = this.balance + depositAmount;
      alert(`
      Deposited amount: ${depositAmount}`);
      this.getBalance();
    }
  },
  withdrawal: function () {
    let withdrawalAmount = parseFloat(prompt("How much would you like to withdraw?"));
    if (withdrawalAmount <= 0 || isNaN(withdrawalAmount)) {
      this.accountError();
      this.withdrawal();
    } else {
      this.balance = this.balance - withdrawalAmount;
      alert(`Withdrawn amount: ${withdrawalAmount}`);
      this.getBalance();
    }
  },
  getAccountName: function () {
    alert(`Name of account: ${this.accountName}`);
    atm();
  },
  accountError: function () {
    alert("The input is not valid")

    // display a message to the user when there has been an error.
    // I have put an if/else statement in both deposit and withdrawal
    // to handle possible errors. Maybe I can call for accountError instead?
  },
  exitAccount: function () {
    window.close();
  }
}

// STARTER FUNCTION
function atm() {
  let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5. Exit"));

  switch (choice) {
    case 1: account.getBalance();
    break;
    case 2: account.deposit();
    break;
    case 3: account.withdrawal();
    break;
    case 4: account.getAccountName();
    break;
    case 5: account.exitAccount();
    break;
    default: account.accountError();
    atm();
    break;
  }
}

// DISPLAY ACCOUNT BALANCE
  atm();
