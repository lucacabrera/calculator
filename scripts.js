let number1;
let number2;
let operation;
let answer;
const buttons = document.querySelectorAll(".button");
let lastPress;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  let total = num1 - num2;
  return total;
}

function multiply(num1, num2) {
  let total = num1 * num2;
  return total;
}

function divide(num1, num2) {
  if (num2 === 0) {
    alert("Cannot divide by zero");
    return null;
  }
  let total = num1 / num2;
  return total;
}

function operate(operator, num1, num2) {
  if (operator == "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  }
}

function assignNumber(value) {
  if (operation === undefined) {
    number1 = (number1 || "") + value;
    screen.innerText = number1
  } else {
    number2 = (number2 || "") + value;
    screen.innerText = number2
  }
}

function assignOperator(operator) {
  if (number1 && number2) {
    operateCheck();
  }
  operation = operator;
  lastPress = "operation";
  screen.innerText = operation
}

function operateCheck() {
  if (operation && number1 !== undefined && number2 !== undefined) {
    answer = operate(operation, parseFloat(number1), parseFloat(number2));
    if (answer !== null) {
      number1 = answer;
      number2 = "";
      operation = undefined;  
      screen.innerText = answer
    }
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (!isNaN(value)) {
      assignNumber(value);
      lastPress = "number";
    } else if (value == "/" || value == "*" || value == "+" || value == "-") {
      assignOperator(value);
    } else if (value == "=") {
      operateCheck();
    } else if (value == "clear") {
      number1 = "";
      number2 = "";
      operation = undefined;
      answer = undefined;
      lastPress = undefined;
      screen.innerText = ""
    }
  });
});


const screen = document.querySelector(".screen")