import {clearTask, validatorNumber} from "./validation";

const fibonacci = () => {
  const fibonacciInput = document.querySelector(".js-fibonacci-input");
  const fibonacciNumber = document.querySelector(".js-all-fibonacci-number");

  const cleanButtonFibonacci = document.querySelector(
    ".js-clean-btn-fibonacci-number"
  );

  cleanButtonFibonacci.addEventListener("click", () => {
    clearTask(fibonacciNumber, fibonacciInput);
  });

  const fibonacci = (n) => {
    let fibArr = "0 1";
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const c = a + b;
      fibArr = `${fibArr}, ${c}`;
      a = b;
      b = c;
    }
    return fibArr;
  };

  fibonacciInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      if (validatorNumber(1, 1470, event.target)) {
        fibonacciNumber.innerHTML = fibonacci(event.target.value);
      }
    }
  });
};

export default fibonacci;