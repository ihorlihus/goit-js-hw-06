function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const windowBgColorEl = document.body
const colorEl = windowBgColorEl.querySelector('.color');
const buttonEl = windowBgColorEl.querySelector('.change-color');

buttonEl.addEventListener('click', changeBgColor)

function changeBgColor(event) {
  if (event) {
    colorEl.textContent = getRandomHexColor();

    windowBgColorEl.style.backgroundColor = colorEl.textContent;
  }
}
