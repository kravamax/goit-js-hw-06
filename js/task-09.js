const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  textColor: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", changeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const color = getRandomHexColor();

  refs.body.style.backgroundColor = color;
  refs.textColor.innerText = color;
}
