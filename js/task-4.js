const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }
  const data = {
    email: email,
    password: password,
  };
  console.log(data);
  e.target.reset();
}
