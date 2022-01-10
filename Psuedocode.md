Pseudo-Code

```

When (user clicks start game) {

    Pick a random word from an array.
    Guessed letters = [ ]
    Time-Remaining = 60 seconds.

    For () {
        display "_" to replace letters in chosen word
    }
}

function { player guesses letters using key }


if ( player guesses correct letter ) {
    replace "_" with the correct letter in the corresponding position
    add letter to guessed letters
    play correct audio
} 
else if ( player guesses incorrect letter ) {
    add letter to guessed letters
    play incorrect audio
} 

if ( all the letters are guessed correctly ) {
    end game for a win
    add 1 to win count
} 
if ( time count = 0 ) {
    end game for a loss
    add 1 to loss count
}



```


