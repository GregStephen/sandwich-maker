import util from './util.js';
import bread from '../components/bread.js';
import meat from '../components/meat.js';
import veggies from '../components/veggie.js';
import cheese from '../components/cheese.js';
import price from '../helpers/price.js'

const meatCheckboxes = document.getElementsByName('meat');
const veggieCheckboxes = document.getElementsByName('veggie');
const cheeseCheckboxes = document.getElementsByName('cheese');
const breadRadioBtns = document.getElementsByName('bread');
let meatIngredientList = [];
let veggieIngredientList = [];
let cheeseIngredientList = [];
// let ingredientList = [];
let breadChoice = '';
let breadPrice = 0;
let totalPrice = 0;

const checkboxChange = (e, type) => {
  let checkbox = e.target;
  let checkboxId = e.target.id;
  let checkboxType = e.target.name;
  if (checkboxType === "meat"){
    if (checkboxType === type){
       let div = `${type}-choice-div`;
      if (checkbox.checked) {
        totalPrice += price.addMeat(checkboxId);
        console.log(totalPrice);
        meatIngredientList.push(checkboxId);
        util.printToDom(div, meatIngredientList);
        util.printToDom('price-div', totalPrice);
      } else {
        let index = meatIngredientList.indexOf(checkboxId);
        if (index !== -1) {
          meatIngredientList.splice(index, 1);
        }
        totalPrice -= price.addMeat(checkboxId)
        util.printToDom(div, meatIngredientList);
        util.printToDom('price-div', totalPrice);
      }
    }
  } else if (checkboxType === "veggie"){
    if (checkboxType === type){
       let div = `${type}-choice-div`;
      if (checkbox.checked) {
        totalPrice += price.addVeggie(checkboxId);
        console.log(totalPrice);
        veggieIngredientList.push(checkboxId);
        util.printToDom(div, veggieIngredientList);
        util.printToDom('price-div', totalPrice);
      } else {
        let index = veggieIngredientList.indexOf(checkboxId);
        if (index !== -1) {
          veggieIngredientList.splice(index, 1);
        }
        totalPrice -= price.addVeggie(checkboxId)
        util.printToDom(div, veggieIngredientList);
        util.printToDom('price-div', totalPrice);
      }
    }
  } else if (checkboxType === "cheese"){
    if (checkboxType === type){
       let div = `${type}-choice-div`;
      if (checkbox.checked) {
        totalPrice += price.addCheese(checkboxId);
        console.log(totalPrice);
        cheeseIngredientList.push(checkboxId);
        util.printToDom(div, cheeseIngredientList);
        util.printToDom('price-div', totalPrice);
      } else {
        let index = cheeseIngredientList.indexOf(checkboxId);
        if (index !== -1) {
          cheeseIngredientList.splice(index, 1);
        }
        totalPrice -= price.addCheese(checkboxId)
        util.printToDom(div, cheeseIngredientList);
        util.printToDom('price-div', totalPrice);
      }
    }
  }
};

const radioChange = (e) => {
  let radio = e.target;
  let radioId = e.target.id;
  totalPrice -= breadPrice;
  if (radio.checked) {
    breadPrice = price.addBread(radioId);
    breadChoice = `${radioId} bread`;
    totalPrice += breadPrice;
  }
  util.printToDom('bread-choice-div', breadChoice);
  util.printToDom('price-div', totalPrice);
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