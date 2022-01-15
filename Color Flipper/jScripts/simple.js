const colors = [
  "red",
  "green",
  "blue",
  "brown",
  "orange",
  "yellow",
  "purple",
  "pink",
  "navy",
  "turquoise",
];

const bttn = document.querySelector("#btn");
const colorText = document.querySelector("#colorText");

function getRandomNumberForSimpleColors() {
  randoNumber = Math.floor(Math.random() * colors.length);

  return randoNumber;
}

bttn.addEventListener("click", function () {
  randomNumber = getRandomNumberForSimpleColors();

  document.body.style.backgroundColor = colors[randomNumber];

  colorText.textContent = colors[randomNumber];
});
