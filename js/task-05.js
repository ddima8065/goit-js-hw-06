const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const change = (event) => {
    if (nameInput === 0) {
        nameOutput.textContent = "Anonimus"
    } else {
        nameOutput.textContent = event.currentTarget.value
    }
}
nameInput.addEventListener('input', change);

