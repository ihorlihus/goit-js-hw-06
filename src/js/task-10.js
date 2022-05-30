
// еще решаю

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controlsEl = document.querySelector('#controls')
const inputEl = controlsEl.firstElementChild;
const btnCreate = inputEl.nextElementSibling;
const buttonDestroy = btnCreate.nextElementSibling;
const inBoxesEl = document.querySelector('#boxes');



inputEl.addEventListener('input', (e) => {
  const boxesNum = e.currentTarget.value;
  console.log(boxesNum);
  btnCreate.addEventListener('change', createBoxes(boxesNum));
})

function createBoxes(amount) {
  const items = [];
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.style.width = '30px';
    item.style.height = '30px';
    items.push(item);
  }
  inBoxesEl.append(...items);
}

buttonDestroy.addEventListener('click', () => {
  inBoxesEl.innerHTML = '';
})

console.log(inBoxesEl)