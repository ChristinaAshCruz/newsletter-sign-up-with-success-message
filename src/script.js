const inputElement = document.querySelector("#email");
const errorMessage = document.querySelector("#error-message");

// regex pattern
const regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

inputElement.addEventListener("input", function () {
  if (!regexPattern.test(inputElement.value)) {
    errorMessage.classList.remove("hidden");
    errorMessage.classList.add("block");
  } else {
    errorMessage.classList.remove("block");
    errorMessage.classList.add("hidden");
  }
});
