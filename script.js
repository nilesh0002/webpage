// auth.js

// Check if user is logged in
function checkAuth() {
    // Retrieve login status from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn');
  
    // If not logged in, redirect to signup page
    if (!isLoggedIn) {
      window.location.href = 'signup.html';
    }
  }
  
  // Call the checkAuth function on page load
  document.addEventListener('DOMContentLoaded', checkAuth);
  