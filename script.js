// words

var words = ["italy", "france", "germany", "spain", "india", "pakistan", "dubai"];

var maxGuesses = 10;
var guessedLetters = [ ];
var wordArray = [ ];
var guessesRemaining = 0;
var winCount = 0;
var lossCount = 0;
var isFinished = false;
var randomWord = document.getElementById("random-word");
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
        randomWord.textContent = wordArray;
    }

    // execute countdown function
    setCountdown();
}



// function begins countdown timer from 60 
function setCountdown(){
    var secondsLeft = 60;
    var timeCount = document.getElementById("time-count")

    var timeInterval = setInterval(() => {
        

        if (secondsLeft > 0){
            secondsLeft --;
            timeCount.textContent = secondsLeft;
        }
        if (secondsLeft === 0){
            timeCount.style.color = "red";
        }

    }, 1000);
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



// Check winner 
function youWin() {
    // if there are no more "_" in the answer array than the player wins
    if (wordArray.indexOf("_") === -1) {
        winCount = winCount + 1;
        isFinished = true;
    }
}



function youLose() {
    // If there is no more time remaining the player loses
    if (secondsLeft === 0) {
        lossCount++;
        isFinished = true;
        console.log("you lose")
        console.log(lossCount)
    }
}


