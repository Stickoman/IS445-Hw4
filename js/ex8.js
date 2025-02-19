function countVowels(word) {
    const vowels = "aeiouy";
    let count = 0;

    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

function isPalindrome(word) {
    let cleanedWord = word.toLowerCase();
    let reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

function analyzeWord() {
    let word = document.getElementById("wordInput").value.trim();

    if (word === "") {
        document.getElementById("wordOutput").innerText = "Invalid input";
        document.getElementById("vowelCount").innerText = "-";
        document.getElementById("palindromeCheck").innerText = "-";
        return;
    }

    let vowelCount = countVowels(word);
    let palindrome = isPalindrome(word) ? "Yes, it is a palindrome" : "No, it is not a palindrome";

    document.getElementById("wordOutput").innerText = word;
    document.getElementById("vowelCount").innerText = vowelCount;
    document.getElementById("palindromeCheck").innerText = palindrome;

    console.log(`${word} contains ${vowelCount} vowels and ${palindrome.toLowerCase()}`);
}

console.log(countVowels("Madam"));
console.log(countVowels("JavaScript"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("JavaScript"));
