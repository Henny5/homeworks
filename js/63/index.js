'use strict';


const bank1 = {
    balance:0,
    performTransaction: function (transAmnt) {
      console.log(this.balance+=transAmnt);
    }
  };

  const bank2 = {
    balance:0,
    performTransaction: function (transAmnt) {
      console.log(this.balance+=transAmnt);
    }
  };

  bank1.performTransaction(10);
  bank2.performTransaction(21);
  console.log(bank1.balance);

  function transaction(transAmnt) {
    console.log(transaction.balance=transAmnt);
  }
  
   function createBank (balance) {
    return {
        balance:balance, 
    };
  }
  

  const bank = createBank(20);
  transaction(bank);
    console.log(bank);

  

