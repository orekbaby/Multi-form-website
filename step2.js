//Get references to the buttons
// Get the next and back buttons
let nextButton = document.getElementById('nextButton');
let backButton = document.getElementById('backButton');

// Define the URLs of the pages
let nextPageURL = 'step3.html';

// Event handler for the next button
nextButton.addEventListener('click', function() {
  let storage = window.localStorage;
  if (!storage.getItem('selected_plan') && !storage.getItem('plan_type')) {
    storage.setItem('selected_plan', 'ARCADE');
    storage.setItem('plan_type', 'MONTHLY');
    console.log("Clicked");
  }
  window.location.href = nextPageURL;
});

// Event handler for the back button
backButton.addEventListener('click', function() {
  // Go back to the previous page
  window.history.back();
});

// Cards function
let cards = document.getElementsByClassName("card-active");
for (const card of cards) {
  card.addEventListener("click", function() {
    console.log("Clicked");
    // Remove previous active style
    Array.from(cards).forEach(function(_card) {
      _card.classList.remove('active');
    });

    // Add active class to the clicked card
    card.classList.add('active');
    localStorage.setItem('selected_plan', card.id.toUpperCase());
  });
}

// Toggle button
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function(e) {
  console.log("Toggle button", e.target.checked);
  
  // Check if monthly (false) or yearly (true) is toggled and save to local storage
  e.target.checked ?
    localStorage.setItem('plan_type', 'YEARLY') :
    localStorage.setItem('plan_type', 'MONTHLY');

  let cardContents = document.getElementsByClassName('card-content');
  Array.from(cardContents).forEach(function(content) {
    let prices = content.getElementsByTagName('p');
    for (const price of prices) {
      price.toggleAttribute('hidden');
    }
  });
});


// Display the stored items in localStorage on the final page
// let planNode = document.getElementById('plan');
// let selectedPlan = localStorage.getItem('selected_plan');
// let planType = localStorage.getItem('plan_type');

// if (selectedPlan && planType) {
//   let planText = document.createTextNode(`${selectedPlan} - ${planType}`);
//   planNode.appendChild(planText);
// }

// // Log children of planNode for debugging
// console.log(planNode.children);
