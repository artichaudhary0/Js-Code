/*
Array : 

type arrayName  = [values] // initilization
type arrayName // declare

Looping with array : 
Push, pop, shift, unshift, Splice
*/

// int array[10] = {1,2,3,4,5,6} c lan
let fun = () => {};

let array1 = [
  1,
  "a", // 1
  true, // 2
  undefined, // 3
  null,
  213133n,
  Symbol("123"),
  Infinity,
  [1, "a", -Infinity],
  {
    name: "Arti",
  },
  fun,
];

//array1.push(true, 1, 23, "arti")
// console.log(array1.unshift(1, 2, 3, 4));

array1.splice(5);

console.log(array1);

// C:\Users\Administrator\Desktop\js\JS-CODE\DAY - 18\Script.js