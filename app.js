// Regex pattern

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

// Document Object Model

const input = document.getElementById('input');
const buttons = document.querySelectorAll('.num-btn');
const resultsDiv = document.getElementById('results');
const phoneBtn = document.getElementById('phone-button');