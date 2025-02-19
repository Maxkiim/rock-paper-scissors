function getComputerChoice(){
    i = Math.floor(Math.random() * 3)
    if (i == 0){
        return 'Rock'
    } else if (i == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}
function getHumanChoice() {
    choice = prompt('Please enter your choice: ')
    x = choice[0].toUpperCase() + choice.toLowerCase().slice(1)
    return x
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'Rock' && computerChoice == 'Paper') || 
    (humanChoice == 'Paper' && computerChoice == 'Scissors')||
    (humanChoice == 'Scissors' && computerChoice == 'Rock')){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore = computerScore+1
    } else if (
        (humanChoice == 'Paper' && computerChoice == 'Rock') || 
        (humanChoice == 'Scissors' && computerChoice == 'Paper')||
        (humanChoice == 'Rock' && computerChoice == 'Scissors')){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore = humanScore + 1
    } else {
            console.log('Its a Tie!')
    }
    return (humanScore, computerScore)
}

let humanScore = 0
let computerScore = 0
function playGame(x){
    for (let i = 0; i < x; i++){
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
        console.log(humanScore, computerScore)
    }
}