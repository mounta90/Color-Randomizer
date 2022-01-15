const bttn = document.querySelector("#btn");
const colorText = document.querySelector("#colorText");

function getRandomHexValue() {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  randomNumber = Math.floor(Math.random() * hexValues.length);

  hValue = hexValues[randomNumber];

  return hValue;
}

bttn.addEventListener("click", function () {
  randomHexColor = `#${getRandomHexValue()}${getRandomHexValue()}${getRandomHexValue()}${getRandomHexValue()}${getRandomHexValue()}${getRandomHexValue()}`;

  document.body.style.backgroundColor = randomHexColor;

  colorText.textContent = randomHexColor;
});
