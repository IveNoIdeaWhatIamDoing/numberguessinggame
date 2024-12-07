easyDifficulty = document.getElementById('easyDifficulty');
midDifficulty = document.getElementById('midDifficulty');
hardDifficulty = document.getElementById('hardDifficulty');
displayMax = document.getElementById('displayMax');
displayMin = document.getElementById('displayMin');
displayGuess = document.getElementById('displayGuess');
EnterGuess = document.getElementById('enterGuess');

let maxNumber;
let guessesRemaining;
let actualNumber; 

function selectDifficulty() {
    if (easyDifficulty.checked) {
        maxNumber = 20;
        guessesRemaining = 10;
    } else if (midDifficulty.checked) {
        maxNumber = 50;
        guessesRemaining = 10;
    } else if (hardDifficulty.checked) {
        maxNumber = 100;
        guessesRemaining = 8;
    } else {
        window.alert('Pick a difficulty first');
        return;
    }

    actualNumber = Math.trunc(Math.random() * maxNumber) + 1;

    displayGuess.textContent = `Guesses remaining: ${guessesRemaining}`;
    displayMax.textContent = `Max No.: ${maxNumber}`;
    displayMin.textContent = `Min No.: 1`;

    EnterGuess.disabled = false;
}

function checkTheGuess() {
    if (guessesRemaining <= 0) {
        window.alert('You’re out of guesses!');
        window.alert(`The correct number was ${actualNumber}`);
        window.alert('Refresh to play again!');
        return;
    }

    const Guess = Number(EnterGuess.value);
    if (Guess > actualNumber) {
        window.alert('No, your guess is too big!');
    } else if (Guess < actualNumber) {
        window.alert('No, your guess is too small!');
    } else {
        window.alert('Your guess was correct! 🎉🥶');
        window.alert('Refresh to play again!');
        return;
    }

    guessesRemaining--;
    displayGuess.textContent = `Guesses remaining: ${guessesRemaining}`;
}
