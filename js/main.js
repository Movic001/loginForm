import { initFormAnimations } from './animations.js';
import { setupFormValidation } from './formValidator.js';
import { handleFormSubmission } from './auth.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  initFormAnimations();
  
  // Set up form validation
  const form = document.getElementById('loginForm');
  setupFormValidation(form);
  
  // Handle form submission
  form.addEventListener('submit', handleFormSubmission);
  
  // Handle back button on success message
  document.getElementById('backToForm').addEventListener('click', () => {
    document.getElementById('successMessage').classList.remove('show');
    document.querySelector('.login-container').classList.remove('hide');
    form.reset();
    
    // Reset input field states
    document.querySelectorAll('.form-input').forEach(input => {
      input.parentElement.classList.remove('focused');
      input.parentElement.classList.remove('has-value');
    });
  });
});