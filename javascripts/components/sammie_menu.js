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
  let domString = '';
  for (const [meat, price] of meatInfo) {
    domString += `<div class="menuCheckbox">`
    domString += `<input type="checkbox" name="meat" id="${meat}" value="${meat}">`
    domString += `<label for="${meat}">${meat}: $${price}</label>`
    domString += `</div>`
  }
  util.printToDom('meats', domString);
  events.attachEvents();
};

export default { makeMenu };