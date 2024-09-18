let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;
let guessedNumbers = [];

document.getElementById('guessBtn').addEventListener('click', () => {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const guessedNumbersDisplay = document.getElementById('guessedNumbers');

    // Check if the guess is already made
    if (guessedNumbers.includes(guess)) {
        message.textContent = `You already guessed ${guess}. Try a new number.`;
        message.style.color = '#f1c40f'; // Yellow for duplicate guess
        return;
    }

    // Track guessed numbers
    guessedNumbers.push(guess);
    guessedNumbersDisplay.textContent = `Guessed Numbers: ${guessedNumbers.join(', ')}`;

    attempts++;

    if (attempts < maxAttempts) {
        if (guess > randomNumber) {
            message.textContent = 'Too high! Try again.';
            message.style.color = '#ff5c8d'; // Bright pink for high guess
        } else if (guess < randomNumber) {
            message.textContent = 'Too low! Try again.';
            message.style.color = '#ffcc29'; // Golden for low guess
        } else if (guess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the number!';
            message.style.color = '#00adb5'; // Bright turquoise for correct guess
            resetGame(); // Reset game if user wins
        } else {
            message.textContent = 'Please enter a valid number.';
            message.style.color = '#f1c40f'; // Yellow for invalid input
        }
    } else {
        message.textContent = `You lost! The correct number was ${randomNumber}. Restarting game...`;
        message.style.color = '#ff5c8d'; // Bright pink for loss
        resetGame(); // Reset game after losing
    }

    message.style.opacity = 1; // Show message with animation
    attemptsDisplay.textContent = attempts;
});

// Function to reset the game
function resetGame() {
    setTimeout(() => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        // guessedNumbers = []; // Clear guessed numbers
        document.getElementById('guessInput').value = '';
        document.getElementById('message').textContent = '';
        document.getElementById('attempts').textContent = attempts;
        // document.getElementById('guessedNumbers').textContent = ''; // Clear displayed guesses
    }, 3000); // Reset the game after 3 seconds
}
