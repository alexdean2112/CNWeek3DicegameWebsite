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
const rollcounter1 = document.getElementById("rollcounter1")
const rollcounter2 = document.getElementById("rollcounter2")

function wincheck1() {
    if (parseInt(score1.textContent) >= 20) {
        score1.textContent = "You Win!"
        wins1.textContent = (parseInt(wins1.textContent) + 1)
    }
}

function wincheck2() {
    if (parseInt(score2.textContent) >= 20) {
        score2.textContent = "You Win!"
        wins2.textContent = (parseInt(wins2.textContent) + 1)
    }
}

function gamereset() {
    if ((score1.textContent === "You Win!") || (score2.textContent === "You Win!")) {
        score1.textContent = "0"
        rollcounter1.textContent = "0"
        score2.textContent = "0"
        rollcounter2.textContent = "0"
    } else {
        return
    }
}

function singleplayer() {
    if (player2.style.display === "none") {
        return 
    } else {
        roll1.style.display = "none"
        roll2.style.display = "block"
    }
}

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
    roll2.style.display = "none"
})

startover.addEventListener("click", () => {
    gamebar.style.display = "none"
    player2.style.display = "block"
    player1but.style.display = "block"
    player2but.style.display = "block"
    startover.style.display = "none"
    roll1.style.display = "block"
    score1.textContent = "0"
    score2.textContent = "0"
    wins1.textContent = "0"
    wins2.textContent = "0"
    rollcounter1.textContent = "0"
    rollcounter2.textContent = "0"
})

roll1.addEventListener("click", () => {
    gamereset()
    singleplayer()
    rollcounter1.textContent = (parseInt(rollcounter1.textContent) + 1)
    let num = Math.ceil(Math.random() * 6)
        if (num === 1) {
            dice.src = "./images/dice1.png"
            score1.textContent = 0
            wincheck1()
        }
        else if (num === 2) {
            dice.src = "./images/dice2.png"
            score1.textContent = (parseInt(score1.textContent) + 2)
            wincheck1()
        }
        else if (num === 3) {
            dice.src = "./images/dice3.png"
            score1.textContent = (parseInt(score1.textContent) + 3)
            wincheck1()
        }
        else if (num === 4) {
            dice.src = "./images/dice4.png"
            score1.textContent = (parseInt(score1.textContent) + 4)
            wincheck1()
        }
        else if (num === 5) {
            dice.src = "./images/dice5.png"
            score1.textContent = (parseInt(score1.textContent) + 5)
            wincheck1()
        }
        else if (num === 6) {
            dice.src = "./images/dice6.png"
            score1.textContent = (parseInt(score1.textContent) + 6)
            wincheck1()
        }
})

roll2.addEventListener("click", () => {
    gamereset()
    roll2.style.display = "none"
    roll1.style.display = "block"
    rollcounter2.textContent = (parseInt(rollcounter2.textContent) + 1)
    let num = Math.ceil(Math.random() * 6)
        if (num === 1) {
            dice.src = "./images/dice1.png"
            score2.textContent = 0
            wincheck2()
        }
        else if (num === 2) {
            dice.src = "./images/dice2.png"
            let num2 = parseInt(score1.textContent)
            score2.textContent = (parseInt(score2.textContent) + 2)
            wincheck2()
        }
        else if (num === 3) {
            dice.src = "./images/dice3.png"
            let num2 = parseInt(score1.textContent)
            score2.textContent = (parseInt(score2.textContent) + 3)
            wincheck2()
        }
        else if (num === 4) {
            dice.src = "./images/dice4.png"
            let num2 = parseInt(score1.textContent)
            score2.textContent = (parseInt(score2.textContent) + 4)
            wincheck2()
        }
        else if (num === 5) {
            dice.src = "./images/dice5.png"
            let num2 = parseInt(score1.textContent)
            score2.textContent = (parseInt(score2.textContent) + 5)
            wincheck2()
        }
        else if (num === 6) {
            dice.src = "./images/dice6.png"
            let num2 = parseInt(score1.textContent)
            score2.textContent = (parseInt(score2.textContent) + 6)
            wincheck2()
        }
})
