


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controlsEl = document.querySelector('#controls')
const inputEl = controlsEl.firstElementChild;
const btnCreate = inputEl.nextElementSibling;
const buttonDestroy = btnCreate.nextElementSibling;
const inBoxesEl = document.querySelector('#boxes');

let nombers;

inputEl.addEventListener('change', (event) => {
  nombers = event.currentTarget.value;
  
  btnCreate.addEventListener('click', createBoxes);
})

function createBoxes(amount) {
color = getRandomHexColor()

  const koubs = `<div width="30px" height="30px" color="${color}"></div>`
  inBoxesEl.insertAdjacentHTML("beforeend", koubs);
  console.log(inBoxesEl)
}

console.log(inBoxesEl)