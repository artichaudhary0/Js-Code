// consturctor with default parameter
// class Product {
//   constructor(name, price, discount = 0) {
//     this.name = name;
//     this.price = price;
//     this.discount = discount;
//     this.finalPrice = this.price - this.price * (this.discount / 100);
//   }
// }
// const p1 = new Product("mobile", 21423, 10);
// const p2 = new Product("laptop", 214263);

// console.log(p1.finalPrice);
// console.log(p2.finalPrice);

// // constructor with optional parameter
// class Rectangle {
//   constructor(height, width, option = {}) {
//     this.width = width;
//     this.height = height;
//     this.color = option.color || "black";
//     this.boderWidth = option.boderWidth || 1;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const rec1 = new Rectangle(10, 20, { color: "red", boderWidth: 2 });
// const rec2 = new Rectangle(13, 43);

// console.log(rec1.color); // red
// console.log(rec2.color); // black

// console.log(rec1.boderWidth); // 2
// console.log(rec2.boderWidth); // 1

// Constructor with Multiple data Types
class Temperature {
  constructor(value, unit) {
    if (unit !== "C" && unit !== "F") {
      throw new Error("unit must be C or F");
    }
    this.value = value;
    this.unit = unit;
  }

  toCelcius() {
    // F to C
    if (this.unit === "F") {
      return ((this.value - 32) * 5) / 9;
    }

    // default C
    return this.value;
  }

  toFahrenheit() {
    // C to F
    if (this.unit === "C") {
      return (this.value * 9) / 5 + 32;
    }
    // default F
    return this.value;
  }
}

const temp = new Temperature(100, "F");

console.log(temp.toFahrenheit());
console.log(temp.toCelcius());

// Constructor with computed properties :
class Book {
  constructor(title, author, numPages, currentPage = 0) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.currentPage = currentPage;
    this.percentComplete = this.calaculateCompletion();
  }

  calaculateCompletion() {
    return ((this.currentPage / this.numPages) * 100).toFixed(2);
  }

  turnPages(pages) {
    this.currentPage = Math.min(pages, this.numPages);
    this.percentComplete = this.calaculateCompletion();
  }
}

const book = new Book("Javascript", "MDN", 500, 250);

console.log(book.percentComplete);

book.turnPages(300);

console.log(book.percentComplete);
/*

#include <iostream>
using namespace std ;


class BookTickets{
    
    private : 
        String from;
        String to ;
        String allClass ;
        String compartment ;
        String date ;
    public :
        void serach(){
            cout<<"Search";
        }
        void askDisha(){
            cout<<"askDisha";
        }
};

int main() {
    
    
    let obj = new BookTickets()
    
    /*
        What is OOP ?
        - object oriented programing.
        - It is a concept where every procedure is based on object.
        - It is concept by which code became well structured, organized, and security.
        - all the logical part of code will be done by object. 
        
        Two components of oop 
        object 
        - instance of class
        
        class 
        - blueprint of object. 
        - blueprint of any procedure. 
        - collection of members(attributes) and member function(methods).
    */
