import { validateForm } from './formValidator.js';
import { showLoadingAnimation, hideLoadingAnimation, showSuccessMessage } from './animations.js';

/**
 * Generates a unique case ID
 * @returns {string} The generated case ID
 */
function generateCaseId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `CASE-${timestamp}-${randomStr}`.toUpperCase();
}

/**
 * Handles form submission
 * @param {Event} event - The submit event
 */
export function handleFormSubmission(event) {
  event.preventDefault();
  
  const form = event.target;
  
  // Validate form
  if (!validateForm(form)) {
    return;
  }
  
  // Show loading animation
  showLoadingAnimation();
  
  // Simulate API call with timeout
  setTimeout(() => {
    // Get form data
    const formData = {
      fullName: form.fullName.value,
      address: form.address.value,
      paymentMode: form.paymentMode.value,
      banksList: form.banksList.value,
      amountScammed: form.amountScammed.value
    };
    
    // Generate case ID
    const caseId = generateCaseId();
    
    // Log the data (in a real app, this would be sent to a server)
    console.log('Form submitted with data:', formData);
    console.log('Generated Case ID:', caseId);
    
    // Update success message with case ID
    document.getElementById('caseId').textContent = caseId;
    
    // Hide loading animation
    hideLoadingAnimation();
    
    // Show success message
    showSuccessMessage();
  }, 1500);
}