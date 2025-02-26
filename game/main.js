const computerChoiceDisplay = document.createElement('h1')
const userChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(computerChoiceDisplay, resultDisplay, userChoiceDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice


const handleclick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'User choice:' + userChoice
    generateComputerChoice()
    getResults()

}

const generateComputerChoice = () => {

    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer choice:' + randomChoice
}
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i];
    button.innerHTML = choices[i]
    button.addEventListener('click', handleclick)
    gameGrid.appendChild(button)
}

const getResults = () => {
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            resultDisplay.innerHTML = 'YOU WIN!'
            break
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            resultDisplay.innerHTML = 'YOU LOSE!'
            break
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            resultDisplay.innerHTML = 'ITS A DRAW!'
            break
    }


}






