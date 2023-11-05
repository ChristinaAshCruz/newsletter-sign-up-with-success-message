// email input element
const inputElement = document.querySelector("#email");
// error message block element
const errorMessage = document.querySelector("#error-message");

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
