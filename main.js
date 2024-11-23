// Add functionality to the player choice buttons in the DOM
// When the player clicks a button, they start a round with the corresponding choice

const playRock = () => playRound('rock', getComputerChoice())
const playPaper = () => playRound('paper', getComputerChoice())
const playScissors = () => playRound('scissors', getComputerChoice())

document.getElementById('rock').addEventListener('click', playRock)
document.getElementById('paper').addEventListener('click', playPaper)
document.getElementById('scissors').addEventListener('click', playScissors)

// Start the human and computer scores at zero
let humanScore = 0
let computerScore = 0

// Simulate one round and display results in the DOM
function playRound (humanChoice,computerChoice) {
    // Create a shortcut for selecting the 'resultsDiv' div as it will be frequently reused
    const resultsDiv = document.getElementById('resultsDiv')

    // Handle human win
    if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // Create human win message and display it in the 'resultsDiv' div
        let humanWinsMessage = document.createElement('p')
        humanWinsMessage.innerText = `You win! ${humanChoice} beats ${computerChoice}`
        resultsDiv.appendChild(humanWinsMessage)
        
        // Increment the human score and update the human score in the DOM
        humanScore += 1
        document.getElementById('humanScoreSpan').innerText = `${humanScore}`

    // Handle draw 
    } else if (humanChoice === computerChoice) {
        // Create draw message and display it in the 'resultsDiv' div
        let drawMessage = document.createElement('p')
        drawMessage.innerText = `It's a draw! You both chose ${humanChoice}`
        resultsDiv.appendChild(drawMessage)

    // Handle computer win
    } else {
        // Create a human loss message and display it in the 'resultsDiv' div
        let computerWinsMessage = document.createElement('p')
        computerWinsMessage.innerText = `You lose! ${computerChoice} beats ${humanChoice}`
        resultsDiv.appendChild(computerWinsMessage)
        
        // Increment the computer score and update the computer score in the DOM
        computerScore += 1
        document.getElementById('computerScoreSpan').innerText = `${computerScore}`
    }

    // Handle human or computer reaching the winning score
    // Display a message in the winner span
    const winningScore = 5

    if (humanScore === winningScore) {
        document.getElementById('winnerSpan').innerText = `Game over!  You win!`
    }

    if (computerScore === winningScore) {
        document.getElementById('winnerSpan').innerText = `Game over!  Computer wins!`
    }
}

// Generate a random choice for the computer

function getComputerChoice () {

    let randomNumber = Math.random()

    if (randomNumber < .33) {
        return "rock"
    } 
    else if (randomNumber <.66) {
        return "paper"
    } 
    else {
        return "scissors"
    }
}