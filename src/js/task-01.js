


const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesEl.length);



const el = document.querySelector('#categories')

const animal = el.firstElementChild;
const animalN = animal.lastElementChild;
console.log('Category: ', animal.firstElementChild.textContent);
console.log('Elements: ', animalN.children.length);


const prod = animal.nextElementSibling;
const prodN = prod.lastElementChild;
console.log('Category: ', prod.firstElementChild.textContent);
console.log('Elements: ', prodN.children.length);


const tech = el.lastElementChild;
const techN = tech.lastElementChild;
console.log('Category: ', tech.firstElementChild.textContent);
console.log('Elements: ', techN.children.length);