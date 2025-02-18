const usernameInput = document.querySelector("#name-input");
let username = document.querySelector("#name-output");

usernameInput.addEventListener("input", onHeaderChange);

function onHeaderChange() {
  if (usernameInput.value.trim() === "") {
    username.textContent = "Anonymous";
  } else {
    username.textContent = usernameInput.value;
  }
}
