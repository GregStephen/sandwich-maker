import util from './util.js';

const meatCheckboxes = document.getElementsByName('meat');
let ingredientList = [];


const checkboxChange = (e) => {
  let checkbox = e.target;
  let checkboxId = e.target.id;

  if (checkbox.checked) {
    ingredientList.push(checkboxId);
    util.printToDom('finished-sandwich-div', ingredientList);
  } else {
    let index = ingredientList.indexOf(checkboxId);
    if (index !== -1) {
      ingredientList.splice(index, 1);
    }
    util.printToDom('finished-sandwich-div', ingredientList);
  }
};

const attachEvents = () => {
  for (const meatCheckbox of meatCheckboxes) {
    meatCheckbox.addEventListener('change', checkboxChange);
  }
}

export default { attachEvents };