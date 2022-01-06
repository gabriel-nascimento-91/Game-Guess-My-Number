"use strict";

/* console.log(document.querySelector(".message").textContent);

;
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 20;
document.querySelector(".score").textContent = 0;
document.querySelector(".guess").value = 69; */

// Handling Click Events

/* const clique = () => {
  console.log(document.querySelector(".guess").value);
};

document.querySelector(".check").addEventListener("click", clique); */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent =
      "⛔The number is between 1 and 20!";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "⬆️Too high!⬆️" : "⬇️Too low!⬇️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "You lost!👎";
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "Correct Number!!🏆";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").style.display = "none";
      // Highscore Functionality
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = 0;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").style.display = "block";
});
