// object : data type
/*
    Primitive : 
        boolean 
        string 
        symbol 
        number
        undefined 
        null 
        bigint 
    Non Primitive : 
        array => object
        object => object
        function => function   

*/

// key - value;
// const shape = {
//   // (height , width ,)=> member variable/ attributes (isSquare , circle)=> member function/ method
//   height: 100,
//   width: 100,
//   isSquare: function () {
//     if (this.height == this.width) {
//       return true;
//     }
//     return false;
//   },
//   circle: {
//     radius: 50,
//     area: function () {
//       console.log("area");
//     },
//   },
// };

// console.log(shape.isSquare());

// factory;
// function circle(height) {
//   return {
//     height,
//     width: 100,
//     isSquare: function () {
//       if (this.height == this.width) {
//         return true;
//       }
//       return false;
//     },
//     circle: {
//       radius: 50,
//       area: function () {
//         console.log("area");
//       },
//     },
//   };
// }

// let obj = circle(100); // obj = {} object

// console.log(obj.isSquare());

// // constructor function
// function Circle(radius) {
//   console.log(this);
//   this.bhavesh = radius;
//   this.area = function () {
//     console.log("Area of cicle is : ", 3.14 * this.bhavesh * this.bhavesh);
//   };
// }

// let anotherObj = new Circle(100);

// anotherObj.area();

/*
Javascript : 
 1 : Prototypical Inheritance : 
     OBJECT DIRECTLY INHERITED FROM OTHER (GLOBAL OBJECT) VIA PROTOTYPE CHAIN

 2 : Class - based Inheritance :
    this allow inheritance from class extends keyword.
    1 : Single 
    2 : Multilevel
    3 : Hybrid expect (Single + multileve)
    4 : hirer...

    multiple : js doest not support multiple inheritance
    Multiple inheritance = (Mixin)
*/

class Account {
  constructor(accountNumber, balance) {
    //  class              local
    this.accountNumber = accountNumber; // 111111
    this.balance = balance; // 3543
  }

  deposit(amount) {
    this.balance = this.balance + amount; // 3543 +  35
    console.log(
      `${amount} has be deposited and total balance is ${this.balance}`
    );
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance = this.balance - amount;
      console.log(
        `${amount} has be withdraw and total balance is ${this.balance}`
      );
    }
  }

  getBalance() {
    return this.balance;
  }
}

// derived class for saving account from Account
class SavingAccount extends Account {
  constructor(accountNumber, balance, intrestRate) {
    super(accountNumber, balance);
    this.intrestRate = intrestRate;
  }
  applyIntrest() {
    const intrest = this.balance * (this.intrestRate / 100);
    3543 * 0.1;
    this.deposit(intrest);
    console.log(`Inreset applied. new balance is : ${this.balance}`);
  }
}

class CheckingAccount extends Account {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
  }
}

let objS = new CheckingAccount(111111, 3543, 10);

// instance (object)10:54 AM
// let obj = new Account(121212, 54234);

// obj.deposit(5234);
// obj.withdraw(5234);
// console.log(obj.getBalance());
