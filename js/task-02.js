const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const parent = document.querySelector('#ingredients');
const createIngredients = ingredients.map(item => {
  const ingTitle = document.createElement('li');
  ingTitle.textContent = item
  ingTitle.classList.add('item')

  return ingTitle;
})

  parent.append(...createIngredients)