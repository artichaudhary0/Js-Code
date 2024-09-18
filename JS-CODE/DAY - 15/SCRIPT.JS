/*
Nested Function
Closure Concepts
Variable as a function
Arrow function
*/

// Nested Function :

// function add()
// {
//     console.log(10+20)
//     function sub()
//     {
//         console.log("Inner function")
//     }

//     sub()
// }

// add() // 22 11 13 19 14 16
/*
22 function calling
11 function excution
13 statement
19 function calling
14 function excution
16 statement
*/

function add() {
  // parent

  function multi() {
    // child
    var c = "whole class";
    return c;
  }

  function subtract() {
    // child
    let result = multi();
    console.log(result);
  }
  return subtract();
}

let res = add(); //

console.log(res);