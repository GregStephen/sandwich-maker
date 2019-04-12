import meat from '../components/meat.js';
import util from '../helpers/util.js';
import events from '../helpers/eventHandlers.js';

const makeMenu = () => {
  const meatObj = meat.getMeat();
  const meatInfo = Object.entries(meatObj)
  let domString = '<div class="row col-3 meat-header"><h2>CHECK OUT OUR MEATS</h2>';
  for (const [meat, price] of meatInfo) {
    domString += `<div class="menuCheckbox col-12">`
    domString += `<input type="checkbox" name="meat" id="${meat}" value="${meat}">`
    domString += `<label for="${meat}">${meat}: ${price}</label>`
    domString += `</div>`
  }
  domString += `</div>`
  util.printToDom('menu-container', domString);
  events.attachEvents();

};

export default { makeMenu };