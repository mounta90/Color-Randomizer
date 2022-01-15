const bttn = document.querySelector("#btn");
const colorText = document.querySelector("#colorText");

function getRandomNumberForRGB() {
  randoNumber = parseInt(Math.random() * 255);

  if (randoNumber == 0) {
    return randoNumber;
  } else {
    randoNumber++;
    return randoNumber;
  }

  //if statement was added to increase the range to the number 255, instead of just 0 - 254
}

bttn.addEventListener("click", function () {
  rNumber1 = getRandomNumberForRGB();
  rNumber2 = getRandomNumberForRGB();
  rNumber3 = getRandomNumberForRGB();

  document.body.style.backgroundColor = `rgb(${rNumber1}, ${rNumber2}, ${rNumber3})`;

  colorText.textContent = `rgb(${rNumber1}, ${rNumber2}, ${rNumber3})`;
});
