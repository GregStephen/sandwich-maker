const meatCheckboxes = document.getElementsByName('meat');

const meatCheckboxChange = (e) => {
  let checkbox = e.target;
  let checkboxId = e.target.id;
  if (checkbox.checked) {
    console.log(`${checkboxId} box was checked`);
  } else {
    console.log(`${checkboxId} box was unchecked`);
  }
}

const attachEvents = () => {
  for (const meatCheckbox of meatCheckboxes) {
    meatCheckbox.addEventListener('change', meatCheckboxChange);
  }
}

export default { attachEvents };