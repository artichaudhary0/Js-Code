// JS Objects
// Object Property
// Object Methods

let arr = [1, 2, 3, 4, 5, 6];

// Object : non primitive data type.
/*
    - value
*/

// object make with variable

let sybmol = Symbol(123);
let bigInt = 1413421n;

let obj = {
  jan: 10,
  feb: 20,
  march: 30,
  1: 40,
  true: 50,
  undefined: 60,
  undefined: 70,
  null: 100,
  arr: [],
  fun: () => {},
  sybmol: 3213,
  bigInt: 122555n,
  "name age": {
    jan: 10,
    feb: 20,
    march: 30,
    1: 40,
    true: 50,
    undefined: 60,
    undefined: 70,
    null: 100,
    arr: [],
    fun: () => {},
    sybmol: 3213,
    bigInt: 122555n,
    "name age": [1, 2, 3, 4, 5, 6, 7],
  },
};
console.log(obj["name age"].sybmol); // dot notation

let object = new Object(); // instance of object class
