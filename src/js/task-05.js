
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const spaceOutput = output.textContent;

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === '') {
        output.textContent = spaceOutput;
    } else {
        output.textContent = event.currentTarget.value;
    };
});