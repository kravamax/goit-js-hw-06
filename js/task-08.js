const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = e.currentTarget.elements;
  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  console.log(formData);

  e.currentTarget.reset();
}
