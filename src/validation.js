export const clearError = (...inputs) => {
  inputs.forEach((item) => {
    item.classList.remove("invalid");
    item.nextElementSibling.nextElementSibling.dataset.error = "";
  });
};

export const errorMessage = (target, message) => {
  target.classList.add("invalid");
  target.nextElementSibling.nextElementSibling.dataset.error = message;
};

export const checkAllInput = (...inputs) => {
  let flag = true;
  inputs.forEach((item) => {
    if (!item.value) {
      errorMessage(item, "Заповніть це поле");
      flag = false;
    }
  });

  return flag;
};

export const validatorNumber = (min, max, target) => {
  if (+target.value >= min && +target.value <= max) {
    return true;
  } else {
    target.classList.add("invalid");
    const err = target.nextElementSibling.nextElementSibling;

    if (target.value < min) {
      err.dataset.error = "Число замале";
    }

    if (target.value > max) {
      err.dataset.error = "Число завелике";
    }
    return false;
  }
};

export const clearTask = (answer, ...inputs) => {
  answer.innerHTML = "";
  inputs.forEach((item) => {
    item.value = "";
    item.classList.remove("valid");
    item.nextElementSibling.classList.remove("active");
  });
};