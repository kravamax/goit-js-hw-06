const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.decrement.addEventListener("click", decrement);
refs.increment.addEventListener("click", increment);

function decrement() {
  refs.value.textContent = counterValue -= 1;
}

function increment() {
  refs.value.textContent = counterValue += 1;
}
