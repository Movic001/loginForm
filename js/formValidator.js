/**
 * Sets up form validation for the login form
 * @param {HTMLFormElement} form - The form element to validate
 */
export function setupFormValidation(form) {
  const fullNameInput = document.getElementById('fullName');
  const addressInput = document.getElementById('address');
  const paymentModeInput = document.getElementById('paymentMode');
  const banksListInput = document.getElementById('banksList');
  const amountScammedInput = document.getElementById('amountScammed');
  
  // Add input event listeners for real-time validation
  fullNameInput.addEventListener('input', () => validateField(fullNameInput, 'fullNameError'));
  addressInput.addEventListener('input', () => validateField(addressInput, 'addressError'));
  paymentModeInput.addEventListener('change', () => validateField(paymentModeInput, 'paymentError'));
  banksListInput.addEventListener('input', () => validateField(banksListInput, 'banksError'));
  amountScammedInput.addEventListener('input', () => validateField(amountScammedInput, 'amountError'));
}

/**
 * Validates a specific form field
 * @param {HTMLInputElement} field - The field to validate
 * @param {string} errorElementId - ID of the error message element
 * @returns {boolean} - Whether the field is valid
 */
export function validateField(field, errorElementId) {
  const errorElement = document.getElementById(errorElementId);
  let isValid = true;
  let errorMessage = '';
  
  // Clear previous error
  errorElement.textContent = '';
  field.classList.remove('error');
  
  // Validate based on field ID
  switch (field.id) {
    case 'fullName':
      if (field.value.trim() === '') {
        errorMessage = 'Please enter your full name';
        isValid = false;
      } else if (field.value.trim().length < 3) {
        errorMessage = 'Name must be at least 3 characters';
        isValid = false;
      }
      break;
      
    case 'address':
      if (field.value.trim() === '') {
        errorMessage = 'Please enter your address';
        isValid = false;
      } else if (field.value.trim().length < 5) {
        errorMessage = 'Address must be at least 5 characters';
        isValid = false;
      }
      break;
      
    case 'paymentMode':
      if (field.value === '') {
        errorMessage = 'Please select a payment method';
        isValid = false;
      }
      break;

    case 'banksList':
      if (field.value.trim() === '') {
        errorMessage = 'Please enter your banks and credit cards';
        isValid = false;
      }
      break;

    case 'amountScammed':
      if (field.value === '') {
        errorMessage = 'Please enter the scammed amount';
        isValid = false;
      } else if (parseFloat(field.value) <= 0) {
        errorMessage = 'Amount must be greater than 0';
        isValid = false;
      }
      break;
  }
  
  // Show error if validation failed
  if (!isValid) {
    errorElement.textContent = errorMessage;
    field.classList.add('error');
  }
  
  return isValid;
}

/**
 * Validates the entire form
 * @param {HTMLFormElement} form - The form to validate
 * @returns {boolean} - Whether the form is valid
 */
export function validateForm(form) {
  const fullNameValid = validateField(form.fullName, 'fullNameError');
  const addressValid = validateField(form.address, 'addressError');
  const paymentModeValid = validateField(form.paymentMode, 'paymentError');
  const banksListValid = validateField(form.banksList, 'banksError');
  const amountScammedValid = validateField(form.amountScammed, 'amountError');
  
  return fullNameValid && addressValid && paymentModeValid && banksListValid && amountScammedValid;
}