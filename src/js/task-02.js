const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientContainer = document.querySelector('#ingredients')

const ings = ingredients.map(ingredient => {
  const ing = document.createElement('li')
  ing.textContent = ingredient;
  ing.classList.add('item')
  return ing;
})

ingredientContainer.append(...ings)