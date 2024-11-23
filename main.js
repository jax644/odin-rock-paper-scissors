// Add functionality so that when the user clicks a button, they play a round with that choice
document.getElementById('rock').addEventListener('click', playRock)
document.getElementById('paper').addEventListener('click', playPaper)
document.getElementById('scissors').addEventListener('click', playScissors)


function playRock () {
    playRound('rock',getComputerChoice())
}

function playPaper () {
    playRound('paper',getComputerChoice())
}

function playScissors () {
    playRound('scissors',getComputerChoice())
}


// Generate a random choice between rock, paper, and scissors
function getComputerChoice () {
    // Generate a pseudo-random number between 0 and 1
    let randomNumber = Math.random()

    // Set up a conditional statement that has an equal likelihood of returning rock, paper, or scissors
    if (randomNumber < .33) {
        return "rock"
    } else if (randomNumber <.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Get a choice from the user
function getHumanChoice () {
    // Prompt the user for a choice
    let humanChoice = prompt('rock, paper, or scissors?','')

    // Validate the user's input and prompt them again if the input is invalid
    if (humanChoice != 'rock' && humanChoice != 'paper' && humanChoice != 'scissors') {
        humanChoice = prompt('invalid input; please try again','')
    }
   
    return humanChoice
}

    // Store the human score and computer score

    let humanScore = 0
    let computerScore = 0

    // Play a single round

    function playRound (humanChoice,computerChoice) {

        if (humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            let humanWinsMessage = document.createElement('p')
            humanWinsMessage.innerText = `You win! ${humanChoice} beats ${computerChoice}`
            document.getElementById('placeForResults').appendChild(humanWinsMessage)
            humanScore += 1
        } else if (humanChoice === computerChoice) {
            let drawMessage = document.createElement('p')
            drawMessage.innerText = `It's a draw! You both chose ${humanChoice}`
            document.getElementById('placeForResults').appendChild(drawMessage)
        } else {
            let computerWinsMessage = document.createElement('p')
            computerWinsMessage.innerText = `You lose! ${computerChoice} beats ${humanChoice}`
            document.getElementById('placeForResults').appendChild(computerWinsMessage)
            computerScore += 1
        }
    }
