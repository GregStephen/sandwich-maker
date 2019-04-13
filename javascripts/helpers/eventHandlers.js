import util from './util.js';
import price from '../helpers/price.js'

const meatCheckboxes = document.getElementsByName('meat');
const veggieCheckboxes = document.getElementsByName('veggie');
const cheeseCheckboxes = document.getElementsByName('cheese');
const breadRadioBtns = document.getElementsByName('bread');
const buyBtn = document.getElementById('buyBtn');
let meatIngredientList = [];
let veggieIngredientList = [];
let cheeseIngredientList = [];
let breadChoice = '';
let breadPrice = 0;
let totalPrice = 0;


////////////////////////////////////////////////////
//////// FOR THE MEAT, VEGGIES, & CHEESES //////////
////////////////////////////////////////////////////

const checkboxChange = (e) => {
  let checkbox = e.target;
  let checkboxId = e.target.id;
  let checkboxIdToPrint = ` ${e.target.id}`;
  let checkboxType = e.target.name;
  if (checkboxType === "meat"){
    let div = `${checkboxType}-choice-div`;
    if (checkbox.checked) {
      totalPrice += price.addMeat(checkboxId);
      meatIngredientList.push(checkboxIdToPrint);
      util.printToDom(div, meatIngredientList);
      util.printToDom('price-div', totalPrice);
    } else {
      let index = meatIngredientList.indexOf(checkboxIdToPrint);
      if (index !== -1) {
        meatIngredientList.splice(index, 1);
      }
      totalPrice -= price.addMeat(checkboxId)
      util.printToDom(div, meatIngredientList);
      util.printToDom('price-div', totalPrice);
    }
  } else if (checkboxType === "veggie"){
    let div = `${checkboxType}-choice-div`;
    if (checkbox.checked) {
      totalPrice += price.addVeggie(checkboxId);
      veggieIngredientList.push(checkboxIdToPrint);
      util.printToDom(div, veggieIngredientList);
      util.printToDom('price-div', totalPrice);
    } else {
      let index = veggieIngredientList.indexOf(checkboxIdToPrint);
      if (index !== -1) {
        veggieIngredientList.splice(index, 1);
      }
      totalPrice -= price.addVeggie(checkboxId)
      util.printToDom(div, veggieIngredientList);
      util.printToDom('price-div', totalPrice);
    }
  } else if (checkboxType === "cheese"){
    let div = `${checkboxType}-choice-div`;
    if (checkbox.checked) {
      totalPrice += price.addCheese(checkboxId);
      cheeseIngredientList.push(checkboxIdToPrint);
      util.printToDom(div, cheeseIngredientList);
      util.printToDom('price-div', totalPrice);
    } else {
      let index = cheeseIngredientList.indexOf(checkboxIdToPrint);
      if (index !== -1) {
        cheeseIngredientList.splice(index, 1);
      }
      totalPrice -= price.addCheese(checkboxId)
      util.printToDom(div, cheeseIngredientList);
      util.printToDom('price-div', totalPrice);
    }
  }
};

////////////////////////////////////////////////////
///////////////////// FOR THE BREAD ////////////////
////////////////////////////////////////////////////

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

////////////////////////////////////////////////////
///////////////// BUY BUTTON EVENT //////////////////
////////////////////////////////////////////////////

const buyBtnFunction = () => {
  // if(document.getElementById("bread-choice-div").innerHTML === ""){
  //   alert("Please select a type of bread")
  // } else {
  let domString = '';
  domString += `<p> $${totalPrice} has been charged to your account!</p>`
  util.printToDom("thanksForBuyingMessage", domString);
};

////////////////////////////////////////////////////
///////////////// ATTACHES EVENTS //////////////////
////////////////////////////////////////////////////

const attachEvents = () => {
  buyBtn.addEventListener('click', buyBtnFunction)
  for (const meatCheckbox of meatCheckboxes) {
    meatCheckbox.addEventListener('change', checkboxChange);
  }
  for (const veggieCheckbox of veggieCheckboxes) {
    veggieCheckbox.addEventListener('change', checkboxChange);
  }
  for (const cheeseCheckbox of cheeseCheckboxes) {
    cheeseCheckbox.addEventListener('change', checkboxChange);
  }
  for (const breadRadioBtn of breadRadioBtns) {
    breadRadioBtn.addEventListener('change', radioChange);
  }
}

export default { attachEvents };