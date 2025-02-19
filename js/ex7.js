function collectWords() {
    let words = [];
    let word;

    while (true) {
        word = prompt("Enter a word (or type 'stop' to finish):").trim();

        if (word.toLowerCase() === "stop") {
            break;
        }

        words.push(word);
    }

    if (words.length === 0) {
        document.getElementById("wordList").innerText = "No words to display, 'Stop' was the first word entered.";
        console.log("No words to display, 'Stop' was the first word entered.");
    } else {
        document.getElementById("wordList").innerHTML = words.join("<br>");
        console.log("You entered the following words:");
        words.forEach(word => console.log(word));
    }
}
