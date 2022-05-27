
const textInput = document.querySelector("input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');
const currentValue = textInput.dataset.length;
// const greenColor = document.querySelector('#validation-input.valid');
textInput.id = '#validation-input validation-input.valid'

console.log(textInput)

// setFocusBtn.addEventListener("click", () => {
//     textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//     textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//     textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//     textInput.textContent.length = "";
// });