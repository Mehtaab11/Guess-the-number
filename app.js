// alert("hehehe")

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
let guessBtn = document.getElementById("guessBtn");

guessBtn.addEventListener("click", () => {
  //   console.log(randomNumber);
  // alert("hehehe")

  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  attempts++;

  if (attempts < maxAttempts) {
    if (guess > randomNumber) {
      message.textContent = "Too high! Try again.";
      message.style.color = "#ff5c8d"; // Bright pink for high guess
    } else if (guess < randomNumber) {
      message.textContent = "Too low! Try again.";
      message.style.color = "#ffcc29"; // Golden for low guess
    } else if (guess === randomNumber) {
      message.textContent = "Congratulations! You guessed the number!";
      message.style.color = "#00adb5"; // Bright turquoise for correct guess

      resetGame();
    } else {
      message.textContent = "Enter a valid number";
      message.style.color = "#00adb5"; // Bright turquoise for correct guess
    }
  } else {
    message.textContent = `You lost! The correct number was ${randomNumber}. Restarting game...`;
    message.style.color = "#ff5c8d";
    resetGame();
  }

  attemptsDisplay.textContent = attempts;
});

function resetGame() {
  setTimeout(() => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
  }, 3000);
  // let guessBtn = document.getElementById("guessBtn")
}
