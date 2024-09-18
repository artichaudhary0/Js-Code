// function appendValue(value) {
//   const display = document.getElementById("display");
//   display.value += value;
// }

// function clearScreen() {
//   const display = document.getElementById("display");
//   display.value = "";
// }

// function calculate() {
//   const display = document.getElementById("display");
//   try {
//     display.value = eval(display.value);
//   } catch (error) {
//     display.value = "error";
//   }
// }

// const buttons = [
//   "7",
//   "8",
//   "9",
//   "/",
//   "4",
//   "5",
//   "6",
//   "*",
//   "1",
//   "2",
//   "3",
//   "-",
//   "0",
//   ".",
//   "=",
//   "+",
//   "C",
// ];

// function appendChild(value) {
//   const display = document.getElementById("display");
//   if (value === "=") {
//     try {
//       display.value = eval(display.value);
//     } catch (error) {}
//   } else if (value === "C") {
//     display.value = "";
//   } else {
//     display.value += value;
//   }
// }

// // adding single child into dom tree
// function createButton(value) {
//   const button = document.createElement("button");
//   button.textContent = value;
//   button.addEventListener("click", () => appendChild(value));
//   return button;
// }

// function setUpCalculator() {
//   const buttonContainer = document.getElementById("buttons"); // div buttons

//   buttons.forEach((value) => {
//     const button = createButton(value);
//     buttonContainer.appendChild(button);
//   });
// }

// setUpCalculator();

const buttons = [
  "7",
  "8",
  "9",
  "/",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "-",
  "0",
  ".",
  "=",
  "+",
  "C",
];

function appendChild(value) {
  const display = document.getElementById("display");
  if (value === "=") {
    try {
      display.value = evaluate(display.value);
    } catch (error) {}
  } else if (value === "C") {
    display.value = "";
  } else {
    display.value += value;
  }
}
// function to evaluate a simple arithmetic expression
function evaluate(expression) {
  expression = expression.replace(`\s+/g`, "");

  let result = 0;
  let operator = "+";
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    123;
    if (/\d/.test(char) || char === ".") {
      currentNumber += char; // build current number
    } else if (["+", "-", "*", "/", "%"].includes(char)) {
      if (currentNumber) {
        result = performOperation(result, parseFloat(currentNumber), operator);
        currentNumber = ""; // reset current number
      }
      operator = char;
    }
  }
  // last number
  if (currentNumber) {
    result = performOperation(result, parseFloat(currentNumber), operator);
  }
  return result;
}

function performOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "error";
  }
}

function createButton(value) {
  const button = document.createElement("button");
  button.textContent = value;
  button.addEventListener("click", () => appendChild(value));
  return button;
}

function setUpCalculator() {
  const buttonContainer = document.getElementById("buttons"); // div buttons

  buttons.forEach((value) => {
    const button = createButton(value);
    buttonContainer.appendChild(button);
  });
}

setUpCalculator();
