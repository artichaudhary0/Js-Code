/**
 CONDITIONAL STATEMENTS :
    IF
    IF-ELSE
    LADDER(IF-ELSE)
    NESTED IF ELSE
 */

// three numbers max

var num1 = 1000,
  num2 = 200,
  num3 = 30;

if (num1 > num2) {

  if (num1 > num3) {
    console.log("num1 is greater");
  } else {
    console.log("num3 is greater");
  }
} else {
  if (num2 > num3) {
    console.log("num2 is greater");
  } else {
    console.log("num3 is greater");
  }
}

// grade
// var marks = 91;

// if (marks >= 0 && marks < 23) {
//   console.log("F");
// } else if (marks >= 23 && marks < 50) {
//   console.log("D");
// } else if (marks >= 50 && marks < 75) {
//   console.log("C");
// } else if (marks >= 75 && marks < 85) {
//   console.log("B");
// } else if (marks >= 85 && marks <= 100) {
//   console.log("A");
// } else {
//   console.log("Invalid number!");
// }

// var condition = 11;

// if-else

// if (condition % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let a = "chaudhary";

// if (condition > 0) {
//   let a = "arti";
//   console.log(a)
//   console.log("Positive");
// }

// console.log(a);

// if (condition < 0) {
//   console.log("Negative");
// }

// if (condition == 0) {
//   console.log("Neutral");
// }

// if(condition %  3 == 0 && condition  % 5 == 0)
// {
//     console.log("Divisible by 3 and 5")
// }
