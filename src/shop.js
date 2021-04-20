import {checkAllInput} from './validation';

const shop = () => {

  const put = (e, name, price) => {
    if (e.key !== "Enter" || !checkAllInput(name, price)) {
      return;
    }

    const table = document.querySelector('#table-shop');
    const context = (name, price) => `
  <li class="row collection-item grey darken-4">
      <span class="col s10">${name}</span>
      <span class="col s2">${price}</span>
  </li>`;

    table.insertAdjacentHTML('beforeend', context(name.value, price.value));
  }

  const name = document.querySelector('#input-name');
  const price = document.querySelector('#input-price');


  name.addEventListener('keyup', (e) => put(e, name, price));
  price.addEventListener('keyup', (e) => put(e, name, price));


};

export default shop;