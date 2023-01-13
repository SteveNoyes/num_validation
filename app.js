// Regex pattern

function mobileCheck(str) {
  let bracketCheck = /[(]\d{3}[)]/;
  let checkBeginning = /^([(]\d{3}[)])/;
  let otherCharsCheck = /^[-]|[^\s-\d)(]/;
  let space = /[\s-]/g;
  let countryCodeCheck = /^1/;
  let simple = str.replace(space, '');
  if (otherCharsCheck.test(str)) {
      return false;
  } else {
      if (simple.length === 13
          && countryCodeCheck.test(simple)
          && bracketCheck.test(simple)) {
          return true;
      } else if (simple.length === 12
          && checkBeginning.test(simple)) {
          return true;
      } else if (simple.length === 11
          && countryCodeCheck.test(simple)) {
          return true;
      } else if (simple.length === 10) {
          return true;
      }
  } return false;
}

// Document Object Model

const input = document.getElementById('input');
const buttons = document.querySelectorAll('.num-btn');
const resultsDiv = document.getElementById('results');
const phoneBtn = document.getElementById('phone-button');

// Button

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let number;
    if (e.target.tagName == 'SPAN' || e.target.tagName == 'P') {
      number = e.target.parentElement.attributes.number.value;
    } else {
      number = e.target.attributes.number.value;
    }
    input.value += number;
  });
});

// Display Input Results

function displayResults(input) {
  let answer = mobileCheck(input);
  if (answer) {
    resultsDiv.innerHTML = 'Valid phone number!';}
  else {
    resultsDiv.innerHTML = 'Invalid phone number!';}
}

// Enter Submit

input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
      displayResults(e.target.value);
  }
});

// Phone Icon to Submit

phoneBtn.addEventListener('click', () => {
  displayResults(input.value);
});