document.getElementById("myForm").addEventListener("submit", function(event) {
  

  let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    
 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let cards = document.querySelectorAll(".card"); // Select all card elements
    if (!nameInput.value || !emailPattern.test(emailInput.value)) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill in all required fields and enter a valid email address.");
    }
  });


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

  



 

  