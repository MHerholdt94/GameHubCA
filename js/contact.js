const formEmail = document.querySelector(".form-email");
const firstName = document.querySelector("#firstname-co");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastname-co");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email-co");
const emailError = document.querySelector("#emailError");
const comment = document.querySelector("#comment");
const commentError = document.querySelector("#commentError");
const checkbox = document.querySelector("#policy");
const policyError = document.querySelector("#policyError");
const validationMessage = document.querySelector("#validationMessage");

function formValidation(event) {
  event.preventDefault();

  if (lengthCheck(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (lengthCheck(lastName.value, 0) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (lengthCheck(comment.value, 9) === true) {
    commentError.style.display = "none";
  } else {
    commentError.style.display = "block";
  }

  if (policy.checked) {
    policyError.style.display = "none";
  } else {
    policyError.style.display = "block";
  }

  if (
    lengthCheck(firstName.value, 0) === true &&
    lengthCheck(lastName.value, 0) === true &&
    validEmail(email.value) === true &&
    lengthCheck(comment.value, 9) === true &&
    policy.checked === true
  ) {
    validationMessage.style.display = "block";
    formEmail.reset();
  } else {
    validationMessage.style.display = "none";
  }
}

formEmail.addEventListener("submit", formValidation);

function lengthCheck(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
