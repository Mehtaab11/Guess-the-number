let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
let guessBtn = document.getElementById("guessBtn");

console.log(randomNumber);

guessBtn.addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  attempts++;

  if (guess < 0 || guess > 100) {
    message.textContent = "Please enter between 0-100! Try again.";
    message.style.color = "#ff5c8d"; // Bright pink for invalid guess
    return;
  }

  if (isNaN(guess)) {
    message.textContent = "Please enter a valid number! Try again.";
    message.style.color = "#ff5c8d"; // Bright pink for invalid guess
    return;
  }

  if (attempts < maxAttempts) {
    if (guess === randomNumber) {
      message.textContent = "Congratulations! You guessed the number!";
      message.style.color = "#6dff29"; // Bright turquoise for correct guess
      resetGame();
    } else if (Math.abs(guess - randomNumber) <= 3) {
      message.textContent = "So Close! Try again.";
      message.style.color = "#00adb5"; // Bright pink for close guess
    } else if (guess > randomNumber) {
      message.textContent = "Too high! Try again.";
      message.style.color = "#ff5c8d"; // Bright pink for high guess
    } else if (guess < randomNumber) {
      message.textContent = "Too low! Try again.";
      message.style.color = "#ffcc29"; // Golden for low guess
    }
  } else {
    message.textContent = `You lost! The correct number was ${randomNumber}. Restarting game in 5 Seconds...`;
    message.style.color = "#ff5c8d"; // Bright pink for losing
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
  }, 5000);
}
