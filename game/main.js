const computerChoiceDisplay = document.createElement('h1')
const userChoiceDisplay = document.createElement('h1')
const resultDisplay = document.createElement('h1')
const gameGrid = document.getElementById('game')
gameGrid.append(computerChoiceDisplay, resultDisplay, userChoiceDisplay)

const choices = ['rock', 'paper', 'scissors']
let userChoice

const handleclick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()

}

const generateComputerChoice = () => {

    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
}
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices[i];
    button.innerHTML = choices[i]
    button.addEventListener('click', handleclick)
    gameGrid.appendChild(button)
}

