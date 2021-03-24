import {
  checkAllInput,
  clearError,
  clearTask,
  validatorNumber,
} from "./validation";

const elevator = () => {
  const elementForFieldElevator = document.querySelector(".js-field-elevator");
  const inputFloors = document.querySelector("#input-floors");
  const inputFlat = document.querySelector("#input-flat");
  const formElevator = document.querySelector(".js-form-elevator");
  const numberFlatOnField = 3;

  const fieldElevator = (numberFlat) => {
    const floorFlat = Math.ceil(numberFlat / numberFlatOnField);
    if (floorFlat % 2 === 0) {
      return `Поверх ${floorFlat} виходьте`;
    } else if (floorFlat === 1) {
      return `Поверх ${floorFlat + 1} спустітся на один нижче`;
    } else {
      return `Поверх ${floorFlat - 1} піднімітся на один вище`;
    }
  };

  formElevator.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const flat = inputFlat.value;
      const floors = inputFloors.value;

      if (
        checkAllInput(inputFlat, inputFloors) &&
        validatorNumber(1, 100000, inputFloors) &&
        validatorNumber(1, numberFlatOnField * floors, inputFlat)
      ) {
        clearError(inputFlat, inputFloors);

        elementForFieldElevator.innerHTML = fieldElevator(flat);
      }
    }
  });

  const cleanButtonElevator = document.querySelector(
    ".js-clean-btn-field-elevator"
  );

  cleanButtonElevator.addEventListener("click", () => {
    clearTask(elementForFieldElevator, inputFloors, inputFlat);
  });
};

export default elevator;
