// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const refs = {
  listRef: document.querySelector("#ingredients"),
};

const ingredientsCreate = ingredients.map((ingredient) => {
  const elem = document.createElement("li");

  elem.innerText = ingredient;
  elem.classList.add("item");

  return elem;
});

refs.listRef.append(...ingredientsCreate);
