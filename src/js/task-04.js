
const counterValueEl = document.querySelector('#value');
const buttonDescr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');

const counter = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
}

buttonDescr.addEventListener("click", () => {    
    counter.decrement();
    counterValueEl.textContent = counter.value;
});

buttonIncr.addEventListener("click", () => {
    counter.increment();
    counterValueEl.textContent = counter.value;
});
