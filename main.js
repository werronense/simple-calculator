document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const numberBtns = document.querySelectorAll(".number");
  numberBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      console.log(e.target.id);
      display.textContent += e.target.id;
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
