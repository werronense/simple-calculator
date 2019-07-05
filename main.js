document.addEventListener("DOMContentLoaded", () => {
  // select DOM elements
  const display = document.querySelector(".display");
  const numberBtns = document.querySelectorAll(".number");
  const operatorBtns = document.querySelectorAll(".operator");
  const equalsBtn = document.querySelector("#equals");
  const decimalBtn = document.querySelector("#decimal");
  const acBtn = document.querySelector("#ac");
  const ceBtn = document.querySelector("#ce");

  // initialize input variables
  let inputNumber = "";
  let inputOperation = "add";
  let inputSeries = [0];

  // set event listeners
  numberBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      enterNumber(e);
    });
  });

  operatorBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      enterOperator(e);
    });
  });

  equalsBtn.addEventListener("click", () => {
    enterEquals();
  });

  decimalBtn.addEventListener("click", () => {
    enterDecimal();
  });

  acBtn.addEventListener("click", () => {
    handleAC();
  });

  ceBtn.addEventListener("click", () => {
    handleCE();
  });

  // event handler and helper functions
  function updateDisplay(input) {
    display.textContent = input;
  }

  function handleInput(number, operation) {
    if (inputNumber !== "") {
      inputSeries.push([operation, Number(number)]);
      inputNumber = "";
    }
  }

  function enterNumber(e) {
    inputNumber += e.target.id;
    updateDisplay(inputNumber);
  }

  function enterOperator(e) {
    updateDisplay(e.target.textContent);
    if (!inputOperation && inputNumber) {
      console.log("= num operator");
      inputOperation = e.target.id;
      inputSeries = [0, ["add", Number(inputNumber)]];
      inputNumber = "";
    } else {
      handleInput(inputNumber, inputOperation);
      inputOperation = e.target.id;
    }
  }

  function enterEquals() {
    if (inputOperation) {
      handleInput(inputNumber, inputOperation);
      inputSeries = [assessSeries(inputSeries)];
      updateDisplay(inputSeries[0]);
      inputOperation = "";
    }
  }

  function enterDecimal() {
    if (inputNumber.indexOf(".") < 0) {
      inputNumber += ".";
      updateDisplay(inputNumber);
    }
  }

  function assessSeries(series) {
    if (series.length > 1) {
      return series.reduce((a, b) => {
        return operate(a, b[1], b[0]);
      });
    }
  }

  function resetInputs() {
    inputNumber = "";
    inputOperation = "add";
    inputSeries = [0];
  }

  function handleAC() {
    resetInputs();
    updateDisplay("0");
  }

  function handleCE() {
    if (inputSeries.length === 1) {
      resetInputs();
      updateDisplay("0");
    } else if (inputNumber) {
      inputNumber = "";
      updateDisplay("0");
    } else {
      inputNumber = inputSeries.pop()[1];
      updateDisplay(inputNumber);
      inputOperation = "";
      console.log(inputSeries);
    }
  }

  // operator functions
  function add(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return (y === 0 ? "ERROR" : x / y);
  }

  function operate(x, y, operator) {
    console.log(x, y, operator);
    let result = 0;

    switch (operator) {
      case "add":
        result = add(x, y);
        break;
      case "subtract":
        result = subtract(x, y);
        break;
      case "multiply":
        result = multiply(x, y);
        break;
      case "divide":
        result = divide(x, y);
        break;
      default:
        result = "ERROR";
    }
    return result;
  }

  // initial display value
  updateDisplay(inputSeries[0])
});
