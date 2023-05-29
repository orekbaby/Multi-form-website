// GET LOCALSTORAGE AND INITIALIZE TO ARCADE PLAN IF NO DATA
let localStorage = window.localStorage;
if(!localStorage.getItem('selected_plan') && !localStorage.getItem('plan_type')) {
  localStorage.setItem('selected_plan', 'ARCADE');
  localStorage.setItem('plan_type', 'MONTHLY');
}

// Display the storedItems in localStorage on the final page
let planNode = document.getElementById('plan');
let spacing = planNode.getElementsByClassName('spacing')[0];

let text = [...planNode.childNodes].find(function (child){
  return child.nodeType === Node.TEXT_NODE;
});

spacing.innerHTML = localStorage.getItem('plan_type');
planNode.innerText = localStorage.getItem('selected_plan');
planNode.appendChild(spacing);

console.log(spacing, planNode, text);