document.getElementById("myForm").addEventListener("submit", function(event) {
  

  let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!nameInput.value || !emailPattern.test(emailInput.value)) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill in all required fields and enter a valid email address.");
    }
  });
  let completedSteps = [];

  // Validate step before allowing navigation
  function validateStep(step) {
    // Check if the current step has been completed
    if (completedSteps.includes(step - 1)) {
      // Mark the current step as completed
      completedSteps.push(step);
      return true; // Allow navigation to the next page
    } else {
      alert("Please complete the previous step first.");
      return false; // Prevent navigation to the next page
    }
  }



// cards function
let cards = document.querySelectorAll(".card");
  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      
      cards.forEach(function(card) {card.classList.remove("active");
     });
      // Add active class to the clicked card
     card.classList.add("active");
   });
  });
// toggle-button
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  toggleButton.classList.toggle('active');
  if (toggleButton.classList.contains('active')) {
    window.location.href = "step2-2.html"; // URL for the second page
  } else {
    window.location.href = "step2.html"; // URL for the first page
  }
});

//  next and go back buttons

  



 

  