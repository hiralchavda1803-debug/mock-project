let number = Math.trunc(Math.random() * 20) + 1;
let score = 0;
let highscore = 0;
let guesses = [];
let gameOver = false;



document.querySelector(".check").addEventListener("click", function () {

    if (gameOver) {
        return;
    }

    let guess = Number(document.querySelector(".guess").value);

    if (!guess) {

        document.querySelector(".message").textContent = "Please Enter a Number!";

    }

    else if (guess < 1) {

        document.querySelector(".message").textContent = "Number must be between 1 and 20!";

    }

    else if (guess > 20) {

        document.querySelector(".message").textContent = "Number must be between 1 and 20!";

    }
})