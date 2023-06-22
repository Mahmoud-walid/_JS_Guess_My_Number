'use strict'

'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = Number(document.querySelector('.score_txt .score').textContent);
let selectNumber = document.querySelector('.select_number');

let scoreElement = document.querySelector('.score_txt .score');
let guessNumberElement = document.querySelector('.guessNumber');
let messageElement = document.querySelector('.message');
let highScoreElement = document.querySelector('.high_score_txt .HighScore');

function updateScore(newScore) {
    score = newScore;
    scoreElement.textContent = score;
}

function checkNumber() {
    const selectNumberValue = Number(selectNumber.value);

    if (selectNumberValue !== randomNumber) {
        if (score !== 0 || score === randomNumber) {
            updateScore(score - 1);
        }
    }

    if (selectNumberValue === randomNumber) {
        guessNumberElement.textContent = randomNumber;
        messageElement.textContent = '🎉 Correct answer!';
        document.body.style.backgroundColor = 'green';
        if (score > Number(highScoreElement.textContent)) {
            highScoreElement.textContent = score;
        }
    } else if (selectNumberValue > randomNumber) {
        messageElement.textContent = 'Too high!';
    } else {
        messageElement.textContent = 'Too low!';
    }
}

function againBtn() {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(randomNumber);
    updateScore(20);
    guessNumberElement.textContent = '?';
    messageElement.textContent = '🎉 Start guessing...';
    document.body.style.backgroundColor = 'rgb(65, 65, 65)';
    selectNumber.value = '';
}

selectNumber.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});