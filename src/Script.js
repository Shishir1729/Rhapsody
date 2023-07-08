// script.js

// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
  }
  
  // Function to check the screen orientation and toggle the dropdown accordingly
  function checkOrientation() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const dropdown = document.querySelector('.dropdown');
  
    if (isPortrait) {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }

  
  
  // Function to run when the DOM content is fully loaded
  function onDOMContentLoaded() {
    // Event listener to toggle the dropdown on click
    document.querySelector('.dropdown-toggle').addEventListener('click', toggleDropdown);
  
    // Event listener to check the screen orientation on page load
    checkOrientation();
  
    // Event listener to check the screen orientation on screen resize
    window.addEventListener('resize', checkOrientation);
  }

  // Function to close the dropdown menu when clicking outside
function closeDropdown(event) {
    const dropdown = document.querySelector('.dropdown-content');
    const target = event.target;
    
    if (!dropdown.contains(target) && !target.classList.contains('dropdown-toggle')) {
      dropdown.classList.remove('show');
    }
  }
  
  
  // Event listener for the DOMContentLoaded event
  document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

  // Event listener to close the dropdown when clicking outside
  document.addEventListener('click', closeDropdown);
  