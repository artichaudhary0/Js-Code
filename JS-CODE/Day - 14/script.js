/*
Function with four ways

Type of function  : 
1 : built - In
console.log
alert
prompt

2 : user define function
1 : Take something return something
2 : Take nothing return nothing
3 : Take something return nothing
4 : Take nothing return something

*/

// Take nothing(no parameter) return nothing

// function sub() {
//   let a = 30;
//   let b = 20;
//   console.log(a - b);
// }

// sub();

// Take something(parameter) return nothing

// function add(a, b) {
//   console.log(a + b);
// }

// add(100, 200);

// Take nothing(no parameter) return something
// var a;
// function grade() {
//   let marks = 35;

//   a = "a";

//   switch (true) {
//     case marks >= 0 && marks < 23:
//       return "F";
//     case marks >= 23 && marks < 35:
//       return "D";
//     case marks >= 35 && marks < 55: // true
//       return "C";
//     default:
//       console.log("Invalid marks");
//   }

//   return a;
// }

// console.log(grade());

// Take something return nothing
function grade(marks) {
  a = "a";

  switch (true) {
    case marks >= 0 && marks < 23:
      return "F";
    case marks >= 23 && marks < 35:
      return "D";
    case marks >= 35 && marks < 55: // true
      return "C";
    default:
      return "Invalid marks";
  }
}

console.log(grade());
