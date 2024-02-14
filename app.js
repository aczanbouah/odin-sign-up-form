const userPwdField = document.querySelector("#password");
const confirmUserPwdField = document.querySelector("#confirm-password");
const formWrapper = document.querySelector("#form-wrapper");
const formSubmitButton = document.querySelector("#btn");
const pwdDoNotMatch = document.createElement("p");
pwdDoNotMatch.innerText = "Passwords do not match!";
pwdDoNotMatch.classList.add("error-text");

function checkMatchingPasswords() {
  if (userPwdField.value !== confirmUserPwdField.value) {
    formWrapper.appendChild(pwdDoNotMatch);
    userPwdField.classList.add("error");
    confirmUserPwdField.classList.add("error");
    formSubmitButton.disabled = true;
  } else {
    formWrapper.removeChild(pwdDoNotMatch);
    userPwdField.classList.remove("error");
    confirmUserPwdField.classList.remove("error");
    formSubmitButton.disabled = false;
  }
}

userPwdField.addEventListener("keyup", checkMatchingPasswords);
confirmUserPwdField.addEventListener("keyup", checkMatchingPasswords);
