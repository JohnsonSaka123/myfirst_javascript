const bankAccount = {
  accountNumber : '11037486' ,
  balance : 100,
  deposit : function(amount){
    this.balance += amount;
    return this.balance;
  },

  withdraw : function(amount){
    this.balance -= amount;
    this.blance  >= 0;
    return this.balance;
  },

  getBalance : function(){
    return this.balance;
  }
}

bankAccount.deposit(500);
bankAccount.withdraw(200);

console.log(bankAccount.getBalance());