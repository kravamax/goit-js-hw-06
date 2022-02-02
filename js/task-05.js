const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

changeInput();

refs.input.addEventListener("input", changeInput);

function changeInput() {
  if (refs.input.value.trim() !== "") {
    refs.output.textContent = refs.input.value.trim();
  } else {
    refs.output.textContent = "Anonymous";
  }
}
