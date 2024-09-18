// // basic program :

// // swapping :

// /*
// 1 : understand the problem.
// 2 : requirements of question.
// 3 : pseudo code logic
//     multiple values input a= 10, 20 -10 , b = -20 , 30 , 50
// 4 : dry run
// 5 : practical
// 6 : test and debug
// */

// console.log("=======third variable=====");

// var a = 10;
// var b = 20;

// var temp;

// console.log("Before swapping : ");
// console.log("a : " + a);
// console.log("b : " + b);

// temp = a; // temp = 10
// a = b; // a = 20
// b = temp; // b = 20

// console.log("After swapping : ");
// console.log("a : " + a);
// console.log("b : " + b);

// console.log("=======without third variable=====");

// var c = 20;
// var d = 10;

// console.log("before swapping : ");
// console.log("c : " + c);
// console.log("d : " + d);

// c = c + d;
// d = c - d;
// c = c - d;

// console.log("After swapping : ");
// console.log("c : " + c);
// console.log("d : " + d);

// choice = "Arsegsrti"; // string

// switch (choice) {
//   case "A":
//     console.log("A");
//     break;
//   case "B":
//     console.log("B");
//     break;
//   case 1:
//     console.log("1");
//     break;
//   case true:
//     console.log("true");
//     break;
//   case "Arti":
//     console.log("Arti");
//     break;
//   default:
//     console.log("Invalid choice");
//     break;
// }

// grading :

// var marks = 25;
// var grade;

// if (marks >= 0 && marks < 25) {
//   grade = "F";
// }

// switch (true) {
//   case marks >= 0 && marks < 25 :
//     console.log("scdyh");
//     break;
//   case marks >= 25 && marks < 35 :
//     console.log("gfjgvhg");
//     break;
// }

/*
function : reusable block of code.
Type of function :
built in :
log()

user define :
TNRN : take nothing return nothing
TNRS : take nothing return something
TSRS : take something return something
TSRN : take something return nothing
*/
"use strict";

function grading(marks) {
  var grade;
  if (0 <= marks && marks < 23) {
    grade = "F";
  } else if (23 <= marks && marks < 60) {
    grade = "E";
  } else if (60 <= marks && marks < 70) {
    grade = "D";
  } else if (70 <= marks && marks < 80) {
    grade = "C";
  } else if (80 <= marks && marks < 90) {
    grade = "B";
  } else if (90 <= marks && marks <= 100) {
    grade = "A";
  }
  console.log(grade);
}
grading(95);
// grading();
// grading();
// grading();

// function returnDemo() {
//   var a = 20;
//   if (a % 2 == 0) {
//     return true;
//   } else {
//     return "odd";
//   }
// }

// if (returnDemo() == true) {
//   console.log(`return value true\n${returnDemo()} hgtsdvcusytvf`);
// }
