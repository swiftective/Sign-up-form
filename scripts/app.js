
const confirmPassword = document.getElementById("confirm-password");
const password = document.getElementById('password');

confirmPassword.addEventListener(
  'input',
  validatePassword
)

password.addEventListener(
  'input',
  validatePassword
)

function validatePassword() {
  isSamePassword = confirmPassword.value == password.value;
  confirmPassword.style.borderBottom = isSamePassword ? "1px solid green" : "1px solid red";
}

function validateForm() {
  let isValidPassword = password.value == confirmPassword.value;
  if (!isValidPassword) return false;
  return true;
}

