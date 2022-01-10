// words

var words = ["italy", "france", "germany", "spain", "india", "pakistan", "dubai"];

var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var maxGuesses = 10;


var wordArray = [ ];
var guessesRemaining = 0;
var winCount = 0;
var lossCount = 0;
var isFinished = false;
var randomWord = document.getElementById("random-word");
var startGame = document.getElementById("start-btn");

var guessedLetters = [ ];
var guessedLettersElement = document.getElementById("letters-guessed")
guessedLettersElement.textContent = guessedLetters;


startGame.addEventListener("click", playGame)

var chosenWord = [ ];

var secondsLeft


function playGame() {

    // pick a random word from an array

    chosenWord = words[Math.floor(Math.random() * words.length)];
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


// event listner to check for key press event


document.addEventListener('keyup', function(event){

    var key = event.key.toLowerCase()
    

    if (characters.includes(key)) {
        checkKey(key)
    }
    
})




// Checks whether key pressed responds to letter within word
function checkKey(letter) {

    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        guessedLettersElement.textContent = guessedLetters;
    }
    if (chosenWord.indexOf(letter) === -1) {
        console.log("letter not in word")
    }
    else {
        console.log("letter is in word")
        for (var i = 0; i < chosenWord.length; i++) {
            if (letter === chosenWord[i]) {
                wordArray[i] = letter;
                randomWord.textContent = wordArray;
            }

        }
    }
}






