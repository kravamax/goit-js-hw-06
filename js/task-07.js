const refs = {
  range: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

changeText();

refs.range.addEventListener("input", changeText);

function changeText() {
  refs.text.style.fontSize = refs.range.value + "px";
}
