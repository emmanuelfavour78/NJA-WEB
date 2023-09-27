function displayWelcomeMessage() {
  const welcomeDiv = document.getElementById('welcomeMessage');
  if (welcomeDiv) {
      welcomeDiv.innerHTML = '<p>Thank you for contacting us. You\'re welcome. How can I assist you?</p>';
  }
}

// Call the function when the page loads
window.addEventListener('load', displayWelcomeMessage);
