/**
 * Gets the appropriate greeting based on the time of day
 * @returns {string} The time-based greeting
 */
function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

/**
 * Initializes animations for the login form
 */
export function initFormAnimations() {
  // Add staggered entrance animation to form elements
  const formGroups = document.querySelectorAll('.form-group');
  const header = document.querySelector('.form-header');
  const submitBtn = document.querySelector('.submit-btn');
  
  // Set time-based greeting
  const greeting = document.getElementById('timeGreeting');
  greeting.textContent = getTimeBasedGreeting();
  
  // Animate form container entrance
  document.querySelector('.login-container').classList.add('animate-in');
  
  // Staggered animation for form elements
  setTimeout(() => {
    header.classList.add('animate-in');
    
    formGroups.forEach((group, index) => {
      setTimeout(() => {
        group.classList.add('animate-in');
      }, 100 * (index + 1));
    });
    
    setTimeout(() => {
      submitBtn.classList.add('animate-in');
    }, 100 * (formGroups.length + 1));
  }, 300);
  
  // Handle input field focus animations
  setupInputAnimations();
}

/**
 * Sets up animations for input fields
 */
function setupInputAnimations() {
  const inputs = document.querySelectorAll('.form-input');
  
  inputs.forEach(input => {
    // Add focused class on focus
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    // Remove focused class on blur if no value
    input.addEventListener('blur', () => {
      input.parentElement.classList.remove('focused');
      if (input.value.trim() !== '') {
        input.parentElement.classList.add('has-value');
      } else {
        input.parentElement.classList.remove('has-value');
      }
    });
    
    // Check initial state (for browser autofill)
    if (input.value.trim() !== '') {
      input.parentElement.classList.add('has-value');
    }
  });
}

/**
 * Shows loading animation on the submit button
 */
export function showLoadingAnimation() {
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
}

/**
 * Hides loading animation on the submit button
 */
export function hideLoadingAnimation() {
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
}

/**
 * Shows success message with animation
 */
export function showSuccessMessage() {
  document.querySelector('.login-container').classList.add('hide');
  setTimeout(() => {
    document.getElementById('successMessage').classList.add('show');
  }, 400);
}