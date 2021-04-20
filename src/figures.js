import {checkAllInput} from "./validation";

const figures = () => {
  const triangleBtn = document.querySelector('.btn-triangle');
  const circleBtn = document.querySelector('.btn-circle');
  const inputArray = document.querySelector('#input-array');
  let arr;

  const drawArray = () => {

    const pre = document.querySelector('pre');

    let content = '';
    arr.forEach(subArr => {
      subArr.forEach(item => {
        content = content + `  ${item}`;
      });
      content = content + '\n';
    });

    pre.innerHTML = '';
    pre.innerHTML = content;
  };

  const createArray = (n) => {

    let newArr = Array(n);
    let subArr = Array(n);
    subArr.fill(1, 0, n);
    newArr.fill(subArr, 0, n);
    arr = newArr;
    drawArray();
  }

  const zero = '<span class="zero">0</span>'

  const createTriangle = () => {
    createArray(arr.length);
    // (x-x1)/(x2-x1) = (y-y1)/(y2-y1) - equation of the line
    // arr.fill(1);
    const getEquationline = (x, x1, x2) => (x - x1) / (x2 - x1);

    arr = arr.map((items, y) => {
      if (y === arr.length - 1) {
        return items.map(() => {
          return zero;
        });
      }

      return items.map((item, x) => {
        if (getEquationline(x, (arr.length - 1) / 2, arr.length - 1) === getEquationline(y, 0, arr.length - 1)) {
          return zero;
        }

        if (getEquationline(x, 0, (arr.length - 1) / 2) === getEquationline(y, arr.length - 1, 0)) {
          return zero;
        }

        return item;
      });

    });

    drawArray();
  };

  const createCircle = () => {
    createArray(arr.length);
    const getEquationCircle = (x, y) => Math.pow((x - (arr.length - 1) / 2), 2) + Math.pow((y - (arr.length - 1) / 2), 2) === Math.pow((arr.length - 1) / 2, 2)

    arr = arr.map((items, y) => {

      return items.map((item, x) => {

        if (getEquationCircle(x, y)) {
          return zero;
        }
        return item;
      });
    });
    drawArray();
  };

  inputArray.addEventListener('keyup', (e) => {
    if (e.key !== "Enter" || !checkAllInput(inputArray)) {
      return;
    }
    createArray(+e.target.value)

  });

  triangleBtn.addEventListener('click', createTriangle);
  circleBtn.addEventListener('click', createCircle);

}

export default figures;