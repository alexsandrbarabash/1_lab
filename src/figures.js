import {checkAllInput} from "./validation";

const figures = () => {
  const triangleBtn = document.querySelector('.btn-triangle');
  const circleBtn = document.querySelector('.btn-circle');
  const inputArray = document.querySelector('#input-array');
  let arr;

  const drawArray = () => {
    console.log('sdf')
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

  const createArray = (e) => {
    if (e.key !== "Enter" || !checkAllInput(inputArray)) {
      return;
    }

    const n = +e.target.value
    let newArr = Array(n);
    let subArr = Array(n);
    subArr.fill(1, 0, n);
    newArr.fill(subArr, 0, n);
    arr = newArr;
    drawArray();
  }

  const zero = '<span class="zero">0</span>'

  const createTriangle = () => {
    // (x-x1)/(x2-x1) = (y-y1)/(y2-y1) - equation of the line
    const getEquationline = (x, x1, x2) => (x - x1) / (x2 - x1);


    arr = arr.map((item, y) => {
      if (y === arr.length - 1) {
        return item.map(() => {
          return zero;
        });
      }

      return item.map((item, x) => {
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

  };

  inputArray.addEventListener('keyup', createArray);

  triangleBtn.addEventListener('click', createTriangle);
  circleBtn.addEventListener('click', createCircle);

}

export default figures;