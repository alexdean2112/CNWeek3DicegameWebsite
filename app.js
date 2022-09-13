const dice = document.getElementById("diceimage")
const player1but = document.getElementById("player1but")
const player2but = document.getElementById("player2but")
const startover = document.getElementById("startover")
const roll1 = document.getElementById("roll1")
const roll2 = document.getElementById("roll2")
const player2 = document.getElementById("player2")
const gamebar = document.getElementById("gamebar")
const score1 = document.getElementById("score1")
const score2 = document.getElementById("score2")
const wins1 = document.getElementById("wins1")
const wins2 = document.getElementById("wins2")

player1but.addEventListener("click", () => {
    gamebar.style.display = "flex"
    player2.style.display = "none"
    player1but.style.display = "none"
    player2but.style.display = "none"
    startover.style.display = "block"
})

player2but.addEventListener("click", () => {
    gamebar.style.display = "flex"
    player1but.style.display = "none"
    player2but.style.display = "none"
    startover.style.display = "block"
})

startover.addEventListener("click", () => {
    gamebar.style.display = "none"
    player2.style.display = "block"
    player1but.style.display = "block"
    player2but.style.display = "block"
    startover.style.display = "none"
})

roll1.addEventListener("click", () => {
    let num = Math.ceil(Math.random() * 6)
        if (num === 1) {
            dice.src = "./images/dice1.png"
            score1.textContent = (parseInt(score1.textContent) + 1).toString()
        }
        else if (num === 2) {
            dice.src = "./images/dice2.png"
            let num2 = parseInt(score1.textContent)
            score1.textContent = (parseInt(score1.textContent) + 2).toString()
        }
        else if (num === 3) {
            dice.src = "./images/dice3.png"
            let num2 = parseInt(score1.textContent)
            score1.textContent = (parseInt(score1.textContent) + 3).toString()
        }
        else if (num === 4) {
            dice.src = "./images/dice4.png"
            let num2 = parseInt(score1.textContent)
            score1.textContent = (parseInt(score1.textContent) + 4).toString()
        }
        else if (num === 5) {
            dice.src = "./images/dice5.png"
            let num2 = parseInt(score1.textContent)
            score1.textContent = (parseInt(score1.textContent) + 5).toString()
        }
        else if (num === 6) {
            dice.src = "./images/dice6.png"
            let num2 = parseInt(score1.textContent)
            score1.textContent = (parseInt(score1.textContent) + 6).toString()
        }
})
