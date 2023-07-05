const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counter = 0;

const counterValue = document.querySelector('#value');

const buttonDecrement = () => {
    counter -= 1;
    counterValue.textContent = counter;
};
decrement.addEventListener('click', buttonDecrement);

const buttonIncrement = () => {
    counter += 1;
    counterValue.textContent = counter;
};
increment.addEventListener('click', buttonIncrement);