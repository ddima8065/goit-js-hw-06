const inputEl = document.querySelector('#validation-input');

const num = () => {
    const rightLength = inputEl.dataset.length;
    const actualLength = inputEl.value.length;

    if (actualLength === parseInt(rightLength)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid")
    }
    
}
inputEl.addEventListener('blur', num);