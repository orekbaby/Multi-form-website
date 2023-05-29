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

  



 

  