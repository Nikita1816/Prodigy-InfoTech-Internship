// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    let userGuess = document.getElementById("userGuess").value;
    let feedback = document.getElementById("feedback");
    let attemptsDisplay = document.getElementById("attempts").querySelector("span");

    // Convert input to a number
    userGuess = Number(userGuess);

    // Validate input (check if it's between 1 and 100)
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "⚠️ Enter a number between 1 and 100!";
        feedback.style.background = "#fff3cd";
        feedback.style.color = "#856404";
        return;
    }

    // Increase attempt count
    attempts++;
    attemptsDisplay.textContent = attempts;

    // Check if the guess is correct
    if (userGuess === secretNumber) {
        feedback.textContent = `🎉 Congrats! You guessed it in ${attempts} tries!`;
        feedback.style.background = "#d4edda";
        feedback.style.color = "#155724";
        document.getElementById("userGuess").disabled = true;
    } else if (userGuess > secretNumber) {
        feedback.textContent = "📉 Too high! Try again.";
        feedback.style.background = "#f8d7da";
        feedback.style.color = "#721c24";
    } else {
        feedback.textContent = "📈 Too low! Try again.";
        feedback.style.background = "#f8d7da";
        feedback.style.color = "#721c24";
    }

    // Apply fade-in effect
    feedback.classList.remove("fade-in");
    setTimeout(() => feedback.classList.add("fade-in"), 50);
}

// Function to restart the game
function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").disabled = false;
    document.getElementById("feedback").textContent = "Make your first guess!";
    document.getElementById("feedback").style.background = "#fff5f8";
    document.getElementById("feedback").style.color = "#333";
    document.getElementById("attempts").querySelector("span").textContent = "0";
}
