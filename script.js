// words

var words = ["italy", "france", "germany", "spain", "india", "pakistan", "dubai"];



var maxGuesses = 10;
var guessedLetters = [ ];
var wordArray = [ ];
var guessesRemaining = 0;
var timeCount = 0;
var winCount = 0;
var lossCount = 0;
var isFinished = false;
var chosenWord;
var startGame = document.getElementById("start-btn");

startGame.addEventListener("click", playGame)



function playGame() {

    // pick a random word from an array

    var chosenWord = words[Math.floor(Math.random() * words.length)];
        console.log(chosenWord);

    // store word as "_" replacing amount of letters within word

    var wordArray = [ ];

    for(var i = 0; i < chosenWord.length; i++) {
        wordArray[i] = "_";
        console.log(wordArray);
        
    }

    updateScreen();
}


// Updates HTML elements using javascript
function updateScreen() {

    document.getElementById("win-count").innerText = winCount;
    document.getElementById("loss-count").innerText = lossCount;
    document.getElementById("time-count").innerText = timeCount;
    document.getElementById("random-word").innerText = wordArray.join(" ");
    document.getElementById("letters-guessed").innerText = guessedLetters;

}

// Checks whether key pressed responds to letter within word
function checkKey(letter) {

    // if letter is not in guessedLetters array, push the item to the array
    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
    }
    // if letter is in the chosen word then replace corresponding "_" with the guessed letter
    else {
        for (var i = 0; i < chosenWord.length; i++){
            if (letter === chosenWord[i]) {
                chosenWord[i] = letter;
            }
        }
    }

};

