function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("[type=number]"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

let sideLength = 30;
const valueAddLength = 10;

refs.createButton.addEventListener("click", createBoxes);
refs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;

  let blockMarkup = "";

  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();

    blockMarkup += `<div style ="width:${sideLength}px; height:${sideLength}px; background-color:${randomColor}; "></div>`;

    sideLength += valueAddLength;
  }

  return refs.boxesContainer.insertAdjacentHTML("afterbegin", blockMarkup);
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  sideLength = 30;
}
