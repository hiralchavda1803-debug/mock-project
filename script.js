let targetNumber = Math.floor(Math.random() * 100) + 1;
let userGuesses = [];
let attempts = 0;
let gameOver = false;



let guessInput = document.getElementById("guessInput");
let submitButton = document.getElementById("submitButton");
let feedback = document.getElementById("feedback");
let attemptsDisplay = document.getElementById("attemptsDisplay");
let previousGuesses = document.getElementById("previousGuesses");
let resetButton = document.getElementById("resetButton");