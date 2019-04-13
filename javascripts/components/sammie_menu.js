import meat from '../components/meat.js';
import veggies from '../components/veggie.js';
import cheese from '../components/cheese.js';
import bread from '../components/bread.js';
import util from '../helpers/util.js';
import events from '../helpers/eventHandlers.js';

const makeMenu = () => {
  const meatObj = meat.getMeat();
  const meatInfo = Object.entries(meatObj)
  const veggieObj = veggies.getVeggie();
  const veggieInfo = Object.entries(veggieObj)
  const cheeseObj = cheese.getCheese();
  const cheeseInfo = Object.entries(cheeseObj)
  const breadObj = bread.getBread();
  const breadInfo = Object.entries(breadObj)
  let meatString = '';
  let veggieString = '';
  let cheeseString = '';
  let breadString = '';
  for (const [meat, price] of meatInfo) {
    meatString += `<div class="menuCheckbox">`
    meatString += `<input type="checkbox" name="meat" id="${meat}" value="${meat}">`
    meatString += `<label for="${meat}">${meat}: $${price}</label>`
    meatString += `</div>`
  };
  for (const [veggie, price] of veggieInfo) {
    veggieString += `<div class="menuCheckbox">`
    veggieString += `<input type="checkbox" name="veggie" id="${veggie}" value="${veggie}">`
    veggieString += `<label for="${veggie}">${veggie}: $${price}</label>`
    veggieString += `</div>`
  };
  for (const [cheese, price] of cheeseInfo) {
    cheeseString += `<div class="menuCheckbox">`
    cheeseString += `<input type="checkbox" name="cheese" id="${cheese}" value="${cheese}">`
    cheeseString += `<label for="${cheese}">${cheese}: $${price}</label>`
    cheeseString += `</div>`
  };
  for (const [bread, price] of breadInfo) {
    breadString += `<div class="menuCheckbox">`
    breadString += `<input type="radio" name="bread" id="${bread}" value="${bread}">`
    breadString += `<label for="${bread}">${bread}: $${price}</label>`
    breadString += `</div>`
  };
  util.printToDom('meats', meatString);
  util.printToDom('veggies', veggieString);
  util.printToDom('cheese', cheeseString);
  util.printToDom('bread', breadString);
  events.attachEvents();
};

export default { makeMenu };