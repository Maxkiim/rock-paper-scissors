function getComputerChoice(){
    i = Math.floor(Math.random() * 3)
    console.log(i)
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
    console.log(x)
    return x
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if ((humanChoice == 'Rock' && computerChoice == 'Paper') || 
        (humanChoice == 'Paper' && computerChoice == 'Scissors')||
        (humanChoice == 'Scissors' && computerChoice == 'Rock')){
            computerScore += computerScore
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    } else if (
        (humanChoice == 'Paper' && computerChoice == 'Rock') || 
        (humanChoice == 'Scissors' && computerChoice == 'Paper')||
        (humanChoice == 'Rock' && computerChoice == 'Scissors')){
            humanScore += humanScore
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        console.log('Its a Tie!')
    }
}
