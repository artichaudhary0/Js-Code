/*
Variable as a function
Arrow function
*/

// let namee = function add() {
//   function sub() {
//     return "Inner fun";
//   }
//   return sub(); // inner function
// };

// console.log(namee());

// Arrow

// let var1 = function add() {
//   return () => {};
// };

// console.log(var1());

var var1 = (a) => {
  return a;
};

console.log(var1(100));
