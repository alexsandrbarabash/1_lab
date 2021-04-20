import {checkAllInput, clearTask, validatorNumber} from "./validation";

const twoDimensional = () => {
  const inputM = document.querySelector("#input-m");
  const inputN = document.querySelector("#input-n");
  const formTwoDimensional = document.querySelector("#form-two-dimensional");
  const cleanButtonTwoDimensional = document.querySelector(
    ".js-clean-btn-two-dimensional"
  );
  const answerTwoDimensional = document.querySelector(
    ".js-answer-two-dimensional"
  );

  const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  };

  const fillArray = (n, m) => {
    let arr = [];

    for (let i = 0; i < n; i++) {
      let arrInArr = [];
      for (let j = 0; j < m; j++) {
        arrInArr.push(randomInteger(-100, 100));
      }
      arr.push(arrInArr);
    }
    return arr;
  };

  const sortArray = (arr) => {
    let positiveArray = [];
    let negativesArray = [];

    arr.forEach((item) => {
      item.forEach((number) => {
        if (number >= 0) {
          positiveArray.push(number);
        } else {
          negativesArray.push(number);
        }
      });
    });
    return {positiveArray, negativesArray};
  };

  formTwoDimensional.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      if (
        checkAllInput(inputN, inputM) &&
        validatorNumber(1, 1000, inputN) &&
        validatorNumber(1, 1000, inputM)
      ) {
        const myArray = fillArray(inputN.value, inputM.value);
        const {positiveArray, negativesArray} = sortArray(myArray);
        answerTwoDimensional.innerHTML = `
        Початковий масив: <br> ${myArray
          .map((item, index) => `${index}: ${item.join(", ")}`)
          .join("<br>")}
        <br> <br>
        Масив додатніх чисел: ${positiveArray.join(", ")}
        <br> <br>
        Масив відємних чисел: ${negativesArray.join(", ")}
        `;
      }
    }
  });

  cleanButtonTwoDimensional.addEventListener("click", () => {
    clearTask(answerTwoDimensional, inputM, inputN);
  });
};

export default twoDimensional;
