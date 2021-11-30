let player = {
    name: "Per",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let restart = document.getElementById("restart")
restart.style.display = "none"
//restart.style.visibility = "visible"
function getRandomCard() 
{
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) 
    {
        return 10
    }
    else if(randomNumber === 1)
    {
        let ace = prompt("oh you got an Ace choose 1 or 11" , "")
        if(ace == 1)
            return 1
        else if(ace == 11)
            return 11
    } 
    else 
    {
        return randomNumber
    }
}

function startGame() 
{
    player.name = prompt("please enter your name" , "")
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame()
{
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) 
    {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) 
    {
        message = "Do you want to draw a new card?"
    } 
    else if (sum === 21) 
    {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 
    else 
    {
        message = "You're out of the game!"
        restart.style.display = "inline"
        isAlive = false
    }
    messageEl.textContent = message

}


function newCard() 
{
    if (isAlive === true && hasBlackJack === false) 
    {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}

