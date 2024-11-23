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