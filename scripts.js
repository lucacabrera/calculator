let number1;
let number2;
let operation;
let answer;
const buttons = document.querySelectorAll(".button");
let lastPress;

function add(num1, num2) {
  total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  total = num1 - num2;
  return total;
}

function multiply(num1, num2) {
  total = num1 * num2;
  return total;
}

function divide(num1, num2) {
  total = num1 / num2;
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
      console.log(number1);
    } else {
      number2 = (number2 || "") + value;
      console.log(number2);
    }
  }
  

function assignOperator(operator) {
  if (lastPress == "number" && number2) {
    operateCheck();
  } else {
    operation = operator;
    console.log(operation);
  }
}

function operateCheck() {
  if (operation && number1 !== undefined && number2 !== undefined) {
    answer = operate(operation, parseFloat(number1), parseFloat(number2));
    number1 = answer;
    lastPress = "number";
    number2 = "";
    console.log(answer);
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
      lastPress = "operation";
    } else if (value == "=") {
      operateCheck();
    } else if (value == "clear") {
        number1 = null;
        number2 = null;
        operation = null;
        answer = null;
        lastPress = null;
    }
  });
});
