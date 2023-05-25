// DOM elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Form submission event listener
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the form from submitting

  // Perform form validation
  if (validateForm()) {
    // Retrieve the form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    };

    // Perform further processing, e.g., sending the form data to a server
    // Replace the code below with your desired functionality

    // Display a success message
    alert('Form submitted successfully!');
  }
});

// Form validation function
function validateForm() {
  let isValid = true;

  // Validate name field
  if (nameInput.value.trim() === '') {
    isValid = false;
    showError(nameInput, 'Name is required');
  } else {
    showSuccess(nameInput);
  }

  // Validate email field
  if (emailInput.value.trim() === '') {
    isValid = false;
    showError(emailInput, 'Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, 'Please enter a valid email address');
  } else {
    showSuccess(emailInput);
  }

  // Validate message field
  if (messageInput.value.trim() === '') {
    isValid = false;
    showError(messageInput, 'Message is required');
  } else {
    showSuccess(messageInput);
  }

  return isValid;
}

// Utility function to display error message for a field
function showError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = message;
  formControl.classList.add('error');
}

// Utility function to display success state for a field
function showSuccess(input) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = '';
  formControl.classList.remove('error');
}

// Utility function to validate email format
function isValidEmail(email) {
  // Regular expression for email validation
  const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/;
  return emailRegex.test(email);
}
