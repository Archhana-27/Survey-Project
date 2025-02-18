document.getElementById("surveyForm").addEventListener("submit", function(event) {
  let valid = true;
  let errorMessage = "";

  // Validate Full Name
  const name = document.getElementById("name").value.trim();
  const namePattern = /^[a-zA-Z\s]+$/; // Allows only letters and spaces
  if (!name || !namePattern.test(name)) {
    valid = false;
    errorMessage += "Full Name is required and should only contain letters and spaces.\n";
  }

  // Validate Age
  const age = document.getElementById("age").value;
  if (age < 18 || age > 120 || isNaN(age)) {
    valid = false;
    errorMessage += "Please enter a valid age between 18 and 120.\n";
  }

  // Validate Gender
  const gender = document.getElementById("gender").value;
  if (!gender) {
    valid = false;
    errorMessage += "Please select your gender.\n";
  }

  // Validate Living Situation
  const livingSituation = document.querySelector('input[name="livingSituation"]:checked');
  if (!livingSituation) {
    valid = false;
    errorMessage += "Please select your current living situation.\n";
  }

  // Validate Location
  const location = document.getElementById("location").value.trim();
  if (!location) {
    valid = false;
    errorMessage += "Location is required.\n";
  }

  // Validate Contact (email/phone)
  const contact = document.getElementById("contact").value.trim();
  const emailPattern = /\S+@\S+\.\S+/;
  const phonePattern = /^\d{10}$/;
  if (!contact || (!emailPattern.test(contact) && !phonePattern.test(contact))) {
    valid = false;
    errorMessage += "Please enter a valid email or phone number.\n";
  }

  // Validate Assistance Program Access
  const assistance = document.querySelector('input[name="assistance"]:checked');
  if (!assistance) {
    valid = false;
    errorMessage += "Please answer if you've accessed any homeless assistance programs.\n";
  }

  // Validate Dependents (Yes/No)
  const dependents = document.querySelector('input[name="dependents"]:checked');
  if (!dependents) {
    valid = false;
    errorMessage += "Please specify if you have dependents.\n";
  }

  // Validate Receive Assistance Information (Yes/No)
  const receiveInfo = document.querySelector('input[name="receiveInfo"]:checked');
  if (!receiveInfo) {
    valid = false;
    errorMessage += "Please answer if you would like to receive information about available assistance.\n";
  }

  // Show errors and prevent form submission if not valid
  if (!valid) {
    alert(errorMessage);
    event.preventDefault();
  }
});
