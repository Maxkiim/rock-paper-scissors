// Buttons
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const playBtn = document.querySelector("#play")
const resetBtn = document.querySelector("#reset")
const buttons = document.querySelectorAll('button')
// Points & Comment box
const playerScoreBox = document.querySelector(".human-score")
const computerScoreBox = document.querySelector(".computer-score")
const comments = document.querySelector('.comments')
const roundBox = document.querySelector('.rounds')
 
// Game placeholders
let playerScore = 0
let computerScore = 0
let playerChoice = ""
let round = 1

function removeActive(){
    buttons.forEach(btn => {
        btn.classList.remove('active')
    })
}
function clicked(choice){
    // First it removes all buttons that have the class active and adds that class to the button clicked.
    removeActive()
    choice.classList.add("active")
}
function resetGame(){
    removeActive()
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerChoice = '';
    comments.innerText = '';
    roundBox.innerText = `Round ${round}`;
    playerScoreBox.innerText = '0';
    computerScoreBox.innerText = '0';
}
function humanPointWin(){
    if (playerScore >= 4) {
        playerScore += 1;
        playerScoreBox.innerText = playerScore;
        comments.innerText = `Player Wins this Game ! It took you ${round} rounds to win! Congratulations`;
    } else {
        playerScore += 1
        comments.innerText = 'Player wins this round!';
        playerScoreBox.innerText = playerScore;
    }
}
function computerPointWin(){
    if (computerScore >= 4){
        computerScore += 1
        computerScoreBox.innerText = computerScore
        comments.innerText = `Computer wins this Game ! It took ${round} rounds, good luck next time!`;
    } else {
        computerScore += 1;
        comments.innerText = "Computer wins this round!";
        computerScoreBox.innerText = computerScore;
    }
}
function getComputerChoice(){
    // Make computer choose from one of the three choices and return the choice made randomly
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
function getHumanChoice(humanChoice, choice){
    // Add style to the btn selected and return selected choice as a string with its first letter upper cased.
    playerChoice = humanChoice
    clicked(choice)
    // humanChoice = choice.id[0].toUpperCase()+choice.id.slice(1)
    return playerChoice;
}
function playGame(humanChoice, computerChoice){
    round += 1;
    roundBox.innerText = `Round ${round}`;
    // Gets both human and computer choices, compare and show the results
    if (humanChoice == computerChoice){
        comments.innerText = "You tied this round!"
    } else if ((humanChoice == 'Rock' && computerChoice == 'Scissors') ||
        (humanChoice == 'Scissors' && computerChoice == 'Paper')||
        (humanChoice == 'Paper' && computerChoice == 'Rock')){
        humanPointWin()
    } else {
        computerPointWin()
    }
    removeActive();
}

rock.addEventListener('click', () => getHumanChoice('Rock', rock));
paper.addEventListener('click', () => getHumanChoice("Paper", paper));
scissors.addEventListener('click', () => getHumanChoice("Scissors", scissors));
playBtn.addEventListener("click", () => playGame(playerChoice, getComputerChoice()));
resetBtn.addEventListener('click', () => resetGame())