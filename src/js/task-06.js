
const textInput = document.querySelector("input");
const correctValue = Number(textInput.dataset.length);

textInput.addEventListener('blur', checkInputValue);

function checkInputValue() {
    const { value, classList } = textInput;
    if (value.trim().length !== correctValue) {
        classList.add('invalid');
    } else {
        classList.remove('invalid');
        classList.add('valid');
    }
}