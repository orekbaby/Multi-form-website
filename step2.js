// GET LOCALSTORAGE AND INITIALIZE TO ARCADE PLAN IF NO DATA

let localStorage = window.localStorage;
if(!localStorage.getItem('selected_plan') && !localStorage.getItem('plan_type')) {
  localStorage.setItem('selected_plan', 'ARCADE');
  localStorage.setItem('plan_type', 'MONTHLY');
}


// cards function
let cards = document.getElementsByClassName("card");
for(const card of cards) {
    card.addEventListener("click", function() {
      // REMOVE PREVIOUS active STYLE
        Array.from(cards).forEach(function (_card){
          _card.classList.remove('active');
        });
        // Add active class to the clicked card
        card.classList.add('active');
        localStorage.setItem('selected_plan', card.id.toUpperCase());
    });

}

// toggle-button
let toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function(e) {
  console.log("Toggle button", toggleButton, e.currentTarget.checked, e.target.checked);
  // Check if monthly (false) or yearly (true) is toggled and save to localstorage
  e.target.checked?
    localStorage.setItem('plan_type', 'YEARLY') :
    localStorage.setItem('plan_type', 'MONTHLY');
    let card_contents = document.getElementsByClassName('card-content');
    Array.from(card_contents).forEach(function(content) {
      if(e.target.checked) {
        let prices = content.getElementsByTagName('p');
        for(const price of prices) {
          price.hasAttribute('hidden')? price.removeAttribute('hidden') : price.setAttribute('hidden', 'true');
        }
      } else {
        let prices = content.getElementsByTagName('p');
        for(const price of prices) {
          price.hasAttribute('hidden')? price.removeAttribute('hidden') : price.setAttribute('hidden', 'true');
        }
      }
    })
  // toggleButton.classList.toggle('active');
  // if (toggleButton.classList.contains('active')) {
  //   window.location.href = "step2-2.html"; // URL for the second page
  // } else {
  //   window.location.href = "step2.html"; // URL for the first page
  // }
});

// Display the storedItems in localStorage on the final page
let planNode = document.getElementById('plan');
let children = planNode.children;
console.log(children);

//  next and go back buttons
