// Regex pattern

let bracketCheck = /[(]\d{3}[)]/;
let checkBeginning = /^([(]\d{3}[)])/;
let otherCharsCheck = /^[-]|[^\s-\d)(]/;

// Document Object Model

const input = document.getElementById('input');
const buttons = document.querySelectorAll('.num-btn');
const resultsDiv = document.getElementById('results');
const phoneBtn = document.getElementById('phone-button');