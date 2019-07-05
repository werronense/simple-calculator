document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const numberBtns = document.querySelectorAll(".number");
  const operatorBtns = document.querySelectorAll(".operator");
  const equalsBtn = document.querySelector("#equals");
  const decimalBtn = document.querySelector("#decimal");
  const acBtn = document.querySelector("#ac");
  const ceBtn = document.querySelector("#ce");

  let inputNumber = "";
  let inputSeries = [];

  // event listeners
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

  // user interaction functions
  function updateDisplay(input) {
    display.textContent = input;
  }

  function handleInputNumber(number) {
    inputSeries.push(Number(number));
    inputNumber = "";
  }

  function enterNumber(e) {
    updateDisplay(e.target.id);
    inputNumber += e.target.id;
  }

  function enterOperator(e) {
    updateDisplay(e.target.textContent);
    handleInputNumber(inputNumber);
    inputSeries.push(e.target.id);
  }

  function enterEquals() {
    if (inputSeries.length >= 2) {
      handleInputNumber(inputNumber);
      inputNumber = assessSeries(inputSeries);
      console.log(inputNumber);
      updateDisplay(inputNumber);
      inputSeries = [];
    }
  }

  function enterDecimal() {
    if (inputNumber.indexOf(".") < 0) {
      inputNumber += ".";
      updateDisplay(".");
    }
  }

  /*
  function assessSeries(series) {
    if (series.length === 3) {
      console.log(series);
      return operate(series[0], series[2], series[1]);
    } else {
      const newSeries = series.slice(3);
      newSeries.unshift(operate(series[0], series[2], series[1]));
      console.log(newSeries);
      assessSeries(newSeries);
    }
  }
  */
  function assessSeries(series) {
    if (series.length > 2) {
      
    }
  }

  function clearInputs() {
    inputNumber = "";
    inputSeries = [];
  }

  function handleAC() {
    clearInputs();
    updateDisplay("0");
  }

  function handleCE() {
    if (inputSeries.length === 0) {
      inputNumber = "";
      updateDisplay("0");
    } else {
      inputNumber = inputSeries[0];
      inputSeries = [];
      updateDisplay(inputNumber);
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
    return x / y;
  }

  function operate(x, y, operator) {
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
});
