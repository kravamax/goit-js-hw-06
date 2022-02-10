const refs = {
  input: document.querySelector("#validation-input"),
  trueLengthInput: parseInt(
    document.querySelector("#validation-input").dataset.length
  ),
};

refs.input.addEventListener("blur", validateInput);

function validateInput() {
  if (refs.input.value.trim().length === 0) {
    refs.input.classList.remove("valid");
    refs.input.classList.remove("invalid");

    return;
  }

  if (refs.input.value.trim().length === refs.trueLengthInput) {
    refs.input.classList.add("valid");
    refs.input.classList.remove("invalid");
  } else {
    refs.input.classList.add("invalid");
    refs.input.classList.remove("valid");
  }
}
