const usernameInput = document.querySelector("#name-input");
let username = document.querySelector("#name-output");

username.addEventListener("input", onHeaderChange);

function onHeaderChange() {
  username.textContent = usernameInput.value;
}
