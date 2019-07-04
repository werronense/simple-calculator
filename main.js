document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const numberBtns = document.querySelectorAll(".number");
  const operatorBtns = document.querySelectorAll(".operator");

  numberBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      display.textContent += e.target.id;
    });
  });

  operatorBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      display.textContent += e.target.textContent;
    });
  });

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

    switch (expression) {
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
