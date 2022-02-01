const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

changeInput();

refs.input.addEventListener("input", changeInput);

function changeInput() {
  if (refs.input.value !== "") {
    refs.output.textContent = refs.input.value;
  } else {
    refs.output.textContent = "Anonymous";
  }
}
