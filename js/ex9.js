function startGame() {
    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;

    console.log(`(Cheat Mode) Target Number: ${targetNumber}`); // Debugging

    while (true) {
        guess = Number(prompt("Guess a number between 1 and 100:"));
        attempts++;

        if (guess < targetNumber) {
            alert("Too low, guess again!");
        } else if (guess > targetNumber) {
            alert("Too high, guess again!");
        } else {
            alert(`Correct! It took you ${attempts} attempts to guess the correct number.`);
            document.getElementById("gameResult").innerText = `You won! It took you ${attempts} attempts.`;
            console.log(`Correct! It took ${attempts} attempts.`);
            break;
        }
    }
}
