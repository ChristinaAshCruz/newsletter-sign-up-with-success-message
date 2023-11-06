// email input element
const inputElement = document.querySelector("#email");
// error message block element
const errorMessage = document.querySelector("#error-message");
// form element
const formElement = document.querySelector("#form");

const emailElement = document.querySelector("#email-card");
// ---------------------------- //
const successElement = document.querySelector("#success-card");

// user email element
const userEmailElement = document.querySelector("#user-email");

// dismiss button element
const dismissElement = document.querySelector("#dismiss-btn");
// ---------------------------- //
// regex pattern
const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// create event listener for input element and to run when input value changes
inputElement.addEventListener("input", function () {
  // check whether element is active and in focus and value is not blank
  if (
    inputElement == document.activeElement &&
    inputElement.value != "" &&
    !regexPattern.test(inputElement.value)
  ) {
    // error message appear and remove hidden class
    errorMessage.classList.add("block");
    errorMessage.classList.remove("hidden");
    // input classes to remove and add
    inputElement.classList.remove("border-dark-slate-gray");
    inputElement.classList.add(
      "border-tomato",
      "ring-tomato",
      "text-tomato",
      "bg-tomato",
    );
  } else {
    // hide error message with removing block class and adding hidden class
    errorMessage.classList.remove("block");
    errorMessage.classList.add("hidden");
    // remove previous input classes from line 20
    inputElement.classList.remove(
      "border-tomato",
      "ring-tomato",
      "text-tomato",
      "bg-tomato",
    );
  }
});

// form submit + success card
formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  // if input value is valid
  if (regexPattern.test(inputElement.value)) {
    // make email card hidden
    emailElement.classList.add("hidden");
    // add block class to success message div
    successElement.classList.add("block");
    successElement.classList.remove("hidden");
    // change inner html of span to input value
    userEmailElement.innerHTML = inputElement.value + ". ";
  }
});

// if dismiss button on thank you card is clicked
dismissElement.addEventListener("click", function (event) {
  event.preventDefault();
  // hide success card
  successElement.classList.remove("block");
  successElement.classList.add("hidden");
  // show email card
  emailElement.classList.remove("hidden");
  emailElement.classList.add("block");
  inputElement.value = "";
});
