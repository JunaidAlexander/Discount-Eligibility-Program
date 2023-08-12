let nameElement, ageElement, checkBox, submitButton, resultElement;

document.addEventListener("DOMContentLoaded", function() {
  nameElement = document.getElementById("name");
  ageElement = document.getElementById("age");
  checkBox = document.getElementById("checked"); // Corrected checkbox ID
  submitButton = document.getElementById("submit");
  resultElement = document.getElementById("result");

  submitButton.addEventListener("click", checkAge); // Attach event listener
  console.log("DOM fully loaded and parsed");
});

function checkAge() {
  const age = parseInt(ageElement.value);
  console.log(age);
  if (isNaN(age)) {
    resultElement.textContent = "Please enter a valid age";
  } else if (age < 65 && checkBox.checked) {
    resultElement.textContent = "You are eligible for discount";
  } else {
    resultElement.textContent = "You are not eligible for discount";
  }
}
