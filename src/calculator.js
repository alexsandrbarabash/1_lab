const calculator = () => {
  const btnCalc = document.querySelectorAll(".btn-calc");
  const inputCalc = document.querySelector("#calculator-input");

  const insert = (num) => {
    inputCalc.value = inputCalc.value + num;
  };

  const clearAll = () => {
    inputCalc.value = "";
  };

  const deletLast = () => {
    const expression = inputCalc.value;
    inputCalc.value = expression.substring(0, expression.length - 1);
  };

  const equal = () => {
    const expression = inputCalc.value;
    if (expression) {
      inputCalc.value = eval(expression);
    }
  };

  btnCalc.forEach((item) => {
    item.addEventListener("click", (event) => {
      const text = event.target.textContent;
      switch (event.target.textContent) {
        case "C":
          clearAll();
          break;
        case "arrow_back":
          deletLast();
          break;
        case "=":
          equal();
          break;
        default:
          insert(text);
          break;
      }
    });
  });
};

export default calculator;
