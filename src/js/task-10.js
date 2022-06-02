
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const controlsEl = document.querySelector('#controls')
const inputEl = controlsEl.firstElementChild;
const btnCreate = inputEl.nextElementSibling;
const buttonDestroy = btnCreate.nextElementSibling;
const inBoxesEl = document.querySelector('#boxes');

inputEl.addEventListener('blur', (e) => {
  btnCreate.addEventListener('change',
    createBoxes(e.currentTarget.value));
});

buttonDestroy.addEventListener('click', () => {
  inBoxesEl.innerHTML = '';
  inputEl.value = '';
})

function createBoxes(amount) {
  const items = [];
  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    const item = document.createElement("div");
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.style.width = 30 + i* 10 + 'px';
    item.style.height = 30 + i* 10 + 'px';
    items.push(item);
  }
  inBoxesEl.append(...items);
};