function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let nameCol = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

const changeCol = () => {
  document.body.style.background = getRandomHexColor();
  nameCol.textContent = document.body.style.background; 
}

changeButton.addEventListener('click', changeCol)