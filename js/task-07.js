const controller = document.querySelector('#font-size-control');
const text = document.getElementById('text');

const change = () => {
    text.style.fontSize = controller.value + "px";
}

controller.addEventListener('input', change);