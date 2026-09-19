let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.getElementById("check").addEventListener("click", function () {

    let guess = Number(document.getElementById("guess").value);
    if (!guess) {

        document.getElementById("message").textContent = "Please Enter a Number!";

    }

    else if (guess == number) 
    {
        document.getElementById("message").textContent = "🎉 Correct Number!";
        document.getElementById("number").textContent = number;
    }
})