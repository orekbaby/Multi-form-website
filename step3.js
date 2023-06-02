/// Get references to the buttons
let nextButton = document.getElementById('nextButton');
let backButton = document.getElementById('backButton');

let nextPageURL = 'step4.html';

// Get all checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Add event listener to each checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    console.log("clicked");
    // Check if the checkbox is checked
    if (this.checked) {
      const card = this.closest('.card');
      const cardTitle = document.querySelector('h3').textContent;
      const cardPrice = document.querySelector('p:last-child').textContent;

      // Save the selected card in local storage
      localStorage.setItem('selectedCard', JSON.stringify({
        title: cardTitle,
        price: cardPrice
      }));
    }
  });
});

nextButton.addEventListener('click', function() {
  window.location.href = nextPageURL;
});

backButton.addEventListener('click', function() {
  // Go back to the previous page
  window.history.back();
});
