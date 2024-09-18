// // object / class

// class User {
//   constructor(userName, userPassword) {
//     this.username = userName;
//     this.password = userPassword;
//   }

//   login(inputUserName, inputPassword) {
//     if (inputUserName === this.username && inputPassword === this.password) {
//       console.log("login successful");
//     } else {
//       console.log("login un-successful");
//     }
//   }
// }

// const user = new User("arti", "Arti@123");

// user.login("isvyf", "weuyvgei");
// user.login("arti", "Arti@123");

// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }

//   addItem(itemName, quantity, price) {
//     const item = { itemName, quantity, price };
//     this.items.push(item);
//   }

//   calculate() {
//     return this.items.reduce(
//       (total, item) => total + item.quantity * item.price,
//       0
//     );
//   }

//   checkout() {
//     const total = this.calculate();

//     console.log(`Total amount : ${total}`);
//   }
// }

// const cart = new ShoppingCart();
// cart.addItem("pc", 1, 40);
// cart.addItem("poorab", 1, 40);
// cart.addItem("yash", 1, 40);
// cart.addItem("trisha", 2, 40);

// cart.checkout();

// class TaskManagement {
//   constructor(name, dueDate) {
//     this.name = name;
//     this.dueDate = dueDate;
//     this.completed = false;
//   }
//   completeTask() {
//     this.completed = true;
//     console.log(`Task ${this.name} is completed`);
//   }

//   isOverdue(currentDate) {
//     return new Date(currentDate) > new Date(this.dueDate) && !this.completeTask;
//   }
// }

// const task = new TaskManagement("Project", "2024-08-22");
// task.completeTask();
// console.log(task.isOverdue());

// Bank Transaction System :
// class BankAccount {
//   constructor(accountNumber, accountHolder, balance = 0) { // balance = 0 is an default argumenet
//     this.accountNumber = accountNumber;
//     this.accountHolder = accountHolder;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Deposite ${amount} . after deposite  ${this.balance}`);
//   }

//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//       console.log(`withdraw ${amount} . after withdraw  ${this.balance}`);
//     } else {
//       console.log("Insufficient funds");
//     }
//   }
// }

// const account = new BankAccount(1234, "Arti", 1000);
// console.log(account.balance); // 1000
// account.deposit(1999); // 2999
// console.log(account.balance); // 2999
// account.withdraw(1000); // 1999
// console.log(account.balance); // 1999

// Library management :

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.author} ${this.title}`);
    } else {
      console.log("not available");
    }
  }

  returnBook() {
    this.isAvailable = true;
    console.log("Returned");
  }
}

const book =  Book("ftwde", "jve7fg");

book.checkOut(); // title and author
book.checkOut(); // not ava
book.returnBook(); // returned
book.checkOut(); // title and author
