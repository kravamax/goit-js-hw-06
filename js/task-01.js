const refs = {
  categories: document.querySelectorAll("ul#categories li.item"),
};
console.log("Number of categories:", refs.categories.length);

refs.categories.forEach((category) => {
  console.log("\n");

  console.log(`Category: ${category.firstElementChild.innerText};`);
  console.log(`Elements: ${category.lastElementChild.children.length};`);
});
