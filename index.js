
let nextButton = document.getElementById('nextButton');
document.getElementById("myForm").addEventListener("submit", function(event) {


  let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!nameInput.value || !emailPattern.test(emailInput.value)) {
      event.preventDefault(); // Prevent form submission
      alert("Please fill in all required fields and enter a valid email address.");
    }

});

nextButton.addEventListener('click', function() {
 console.log("clicked")
  window.location.href = nextPageURL;
});
  

    // Store the completed steps
    var completedSteps = [];
  
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
 




  



