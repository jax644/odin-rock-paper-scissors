function getComputerChoice () {
    let randomNumber = Math.random()

    if (randomNumber < .33) {
        return "rock"
    } else if (randomNumber <.66) {
        return "paper"
    } else {
        return "scissors"
    }
}