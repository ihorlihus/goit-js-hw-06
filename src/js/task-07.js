
const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value + '1' ) {
        textEl.style.fontSize = event.currentTarget.value + 'px';
    }
});