// Retrieve the input field element
const inputField = document.getElementById("inputField");

// Add event listener to the form
document.getElementById("myForm").addEventListener("submit", function(event) {
  // Prevent form submission
  event.preventDefault();

  // Ensure the input field exists
  if (inputField !== null) {
    // Validate the input value
    const inputValue = inputField.value;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    const isValid = alphanumericRegex.test(inputValue);

    // Display error message or confirmation based on validity
    const errorElement = document.getElementById("error");
    if (!isValid) {
      errorElement.textContent = "Input must be alphanumeric.";
      //errorElement.style.display = "block"; 
    } else {
      errorElement.style.display = "";
      alert("Input is valid!");
      this.submit();
    }
  }
});
