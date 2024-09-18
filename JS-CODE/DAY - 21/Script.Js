// (Map, Filter, forEach, indexOf, includes, every, some)

let number = [-11, 50];

// const num2 = number.map((num) => num - 10);
// console.log(fun(10,20));

// const filter = number.filter((num) => num % 2 != 0);
// console.log(filter);

// number.forEach(num => console.log(num - 10))

// let value = number.indexOf(11, 1); // (search Element , starting index from where you start)
// console.log(value);

// let elementHai = number.includes(11, 3);
// console.log(elementHai);

// let everyValue = number.every((num) => num > 0);
// console.log(everyValue);

// let someValue = number.some((num) => num > 0);
// console.log(someValue);

function indexOff(arr, index, isIndex, searchItem) {
  if (isIndex) {
    for (let i = index; i < arr.length; i++) {
      if (searchItem == arr[i]) {
        return i;
      }
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (searchItem == arr[i]) {
        return i;
      }
    }
  }
}

console.log(indexOff([10, 20, 40, 30, 50, 10, 20, 30, 30, 50], 0, false, 40));
