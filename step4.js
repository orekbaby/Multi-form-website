
let nextButton = document.getElementById('nextButton');
let backButton = document.getElementById('backButton');

let nextPageURL = 'step5.html';

nextButton.addEventListener('click', function() {
  let planNode = document.getElementById('plan');
  let spacing = planNode.getElementsByClassName('spacing')[0];

  spacing.innerHTML = localStorage.getItem('plan_type');
  planNode.innerText = localStorage.getItem('selected_plan');
  planNode.appendChild(spacing);

  // Retrieve the selected card from local storage
  const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

  // Save the selected card to local storage
  localStorage.setItem('selectedCard', JSON.stringify(selectedCard));

  // Display the selected card on the summary screen
  if (selectedCard) {
    const summaryTitle = document.getElementById('summaryTitle');
    const summaryPrice = document.getElementById('summaryPrice');
    const summaryPlan = document.getElementById('summaryPlan');
    const summaryYear = document.getElementById('summaryYear');
    summaryTitle.textContent = selectedCard.title;
    summaryPrice.textContent = selectedCard.price;
    summaryPlan.textContent = selectedCard.plan;
    summaryYear.textContent = selectedCard.year;
  }

  window.location.href = nextPageURL;
});

backButton.addEventListener('click', function() {
  // Go back to the previous page
  window.history.back();
});
















// // GET LOCALSTORAGE AND INITIALIZE TO ARCADE PLAN IF NO DATA
// let localStorage = window.localStorage;
// if(!localStorage.getItem('selected_plan') && !localStorage.getItem('plan_type')) {
//   localStorage.setItem('selected_plan', 'ARCADE');
//   localStorage.setItem('plan_type', 'MONTHLY');
// }


// // Display the storedItems in localStorage on the final page
// let planNode = document.getElementById('plan');
// let spacing = planNode.getElementsByClassName('spacing')[0];

// let text = [...planNode.childNodes].find(function (child){
//   return child.nodeType === Node.TEXT_NODE;
// });

// spacing.innerHTML = localStorage.getItem('plan_type');
// planNode.innerText = localStorage.getItem('selected_plan');
// planNode.appendChild(spacing);

// // Retrieve the selected card from local storage
// const selectedCard = JSON.parse(localStorage.getItem('selectedCard'));

// // Display the selected card on the summary screen
// if (selectedCard) {
//   const summaryTitle = document.getElementById("summaryTitle");
//   const summaryPrice = document.getElementById("summaryPrice");
//   const summaryPlan = document.getElementById("summaryPlan");
//   const summaryYear = document.getElementById("summaryYear");
//   summaryTitle.textContent = selectedCard.title;
//   summaryPrice.textContent = selectedCard.price;
//   summaryPlan.textContent = selectedCard.plan;
//   summaryYear.textContent = selectedCard.year;
// }

// console.log(spacing, planNode, text);