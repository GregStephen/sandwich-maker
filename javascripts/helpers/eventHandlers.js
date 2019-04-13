import util from './util.js';
import bread from '../components/bread.js';
import meat from '../components/meat.js';
import veggies from '../components/veggie.js';
import cheese from '../components/cheese.js';

const meatCheckboxes = document.getElementsByName('meat');
const veggieCheckboxes = document.getElementsByName('veggie');
const cheeseCheckboxes = document.getElementsByName('cheese');
const breadRadioBtns = document.getElementsByName('bread');
let meatIngredientList = [];
let veggieIngredientList = [];
let cheeseIngredientList = [];
// let ingredientList = [];
let breadChoice = '';

const checkboxChange = (e, type) => {
  let checkbox = e.target;
  let checkboxId = e.target.id;
  let checkboxType = e.target.name;
  console.log(checkboxType);
  console.log("type", type);
  let ingredientList = `${type}IngredientList`;
  ingredientList = [];
  let div = `${type}-choice-div`;

  if (checkboxType === type){
    if (checkbox.checked) {
      ingredientList.push(checkboxId);
      util.printToDom(div, ingredientList);
    } else {
      let index = ingredientList.indexOf(checkboxId);
      if (index !== -1) {
        ingredientList.splice(index, 1);
      }
      util.printToDom(div, ingredientList);
    }
  }
};

const radioChange = (e) => {
  let radio = e.target;
  let radioId = e.target.id;
  if (radio.checked) {
    breadChoice = `${radioId} bread`;
  }
  util.printToDom('bread-choice-div', breadChoice);
}

const attachEvents = () => {
  for (const meatCheckbox of meatCheckboxes) {
    meatCheckbox.addEventListener('change', (event) => { checkboxChange(event, "meat"); });
  }
  for (const veggieCheckbox of veggieCheckboxes) {
    veggieCheckbox.addEventListener('change', (event) => { checkboxChange(event, "veggie"); });
  }
  for (const cheeseCheckbox of cheeseCheckboxes) {
    cheeseCheckbox.addEventListener('change', (event) => { checkboxChange(event, "cheese"); });
  }
  for (const breadRadioBtn of breadRadioBtns) {
    breadRadioBtn.addEventListener('change', radioChange);
  }
}

export default { attachEvents };