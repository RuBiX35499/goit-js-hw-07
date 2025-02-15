const body = document.body;
const button = document.querySelector(".change-color");
button.addEventListener("click", changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
