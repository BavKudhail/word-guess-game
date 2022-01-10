// words
var words = ["italy", "france", "germany", "spain", "india", "pakistan", "dubai"];

var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wordArray = [ ];
var winCount = 0;
var lossCount = 0;
var isFinished = false;
var guessedLetters = [ ];
var chosenWord = [];
var secondsLeft = 60;

var timer = document.getElementById("time-count");

document.getElementById("time-count").textContent = secondsLeft;

var startGame = document.getElementById("start-btn");

startGame.addEventListener("click", playGame)


function playGame() {

    // pick a random word from an array

    chosenWord = words[Math.floor(Math.random() * words.length)];
        console.log(chosenWord);

    // store word as "_" replacing amount of letters within word

    for(var i = 0; i < chosenWord.length; i++) {
        wordArray[i] = " _ ";
    }

    // execute countdown function
    setCountdown();
    updateDisplay();
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
        if (secondsLeft <= 0){
            timeCount.style.color = "red";
        
            // lostGame = true;
            
        }

    }, 1000);
}




// event listener to check for key press event

document.addEventListener('keyup', function(event){

    var key = event.key.toLowerCase()

    if (isFinished) {
        playAgain()
        isFinished = false;
    }

    if (characters.includes(key)) {
        checkKey(key);
        youWin();
        youLose();
        updateDisplay();
    }

    
});


function playAgain() {

    var playAgain = confirm("Do you want to play again?");

    if (playAgain) {
        playGame()
    };

};


// Checks whether key pressed responds to letter within word

function checkKey(letter) {


    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        updateDisplay()
    }

    if (chosenWord.indexOf(letter) === -1) {
        // play an incorrect sound
    }

    else {
        for (var i = 0; i < chosenWord.length; i++) {

            if (letter === chosenWord[i]) {
                wordArray[i] = letter;
                console.log(wordArray);
                updateDisplay()
            }
        }
    }
};



function updateDisplay() {

    document.getElementById("random-word").textContent = wordArray.join("");
    document.getElementById("time-count").textContent = secondsLeft;
    document.getElementById("letters-guessed").textContent = guessedLetters;
    document.getElementById("win-count").textContent = winCount;

};



function youWin() {
    if (wordArray.indexOf(" _ ") === -1){
        console.log("you win")
        winCount++;
        isFinished = true;
        updateDisplay()
    }
};


function youLose() {
    if (timer.textContent == 0){
        console.log("you lose")
        lossCount++;
        isFinished = true;
        updateDisplay()
    }
}

updateDisplay()