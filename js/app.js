'use strict'
const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = Number(document.querySelector(".score_txt .score").innerHTML)
function checkNumber() {
    const selectNumber = document.querySelector(".select_number").value
    if (Number(selectNumber) === randomNumber) {
        document.querySelector(".guessNumber").innerHTML = randomNumber;
        document.querySelector(".message").innerHTML = "🎉 Correct answer!"
        document.body.style.backgroundColor = "green"
    }
    if (Number(selectNumber) !== randomNumber) {
        score -= 1;
    }
}