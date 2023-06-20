'use strict'
const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let scoreElement = Number(document.querySelector(".score_txt .score").innerHTML)
let score = Number(scoreElement)


function checkNumber() {
    const selectNumber = document.querySelector(".select_number").value
    if (Number(selectNumber) !== randomNumber) {
        if (score !== 0 || score === randomNumber) {
            score -= 1;
            document.querySelector(".score_txt .score").innerHTML = score
        }
    }
    if (Number(selectNumber) === randomNumber) {
        document.querySelector(".guessNumber").innerHTML = randomNumber;
        document.querySelector(".message").innerHTML = "🎉 Correct answer!"
        document.body.style.backgroundColor = "green"
        document.querySelector(".high_score_txt .HighScore").innerHTML = score
    }
    else if (selectNumber > randomNumber) {
        document.querySelector(".message").innerHTML = "Too high!"
    } else {
        document.querySelector(".message").innerHTML = "Too low!"
    }
}

function againBtn() {
    location.reload()
}