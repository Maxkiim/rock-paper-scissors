// function getComputerChoice(){
//     i = Math.floor(Math.random() * 3)
//     if (i == 0){
//         return 'Rock'
//     } else if (i == 1) {
//         return 'Paper'
//     } else {
//         return 'Scissors'
//     }
// }
// function getHumanChoice() {
//     choice = prompt('Please enter your choice: ')
//     x = choice[0].toUpperCase() + choice.toLowerCase().slice(1)
//     return x
// }

// function playRound(humanChoice, computerChoice){
//     if ((humanChoice == 'Rock' && computerChoice == 'Paper') || 
//     (humanChoice == 'Paper' && computerChoice == 'Scissors')||
//     (humanChoice == 'Scissors' && computerChoice == 'Rock')){
//         console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
//         computerScore = computerScore+1
//     } else if (
//         (humanChoice == 'Paper' && computerChoice == 'Rock') || 
//         (humanChoice == 'Scissors' && computerChoice == 'Paper')||
//         (humanChoice == 'Rock' && computerChoice == 'Scissors')){
//             console.log(`You win! ${humanChoice} beats ${computerChoice}`)
//             humanScore = humanScore + 1
//     } else {
//             console.log('Its a Tie!')
//     }
//     return (humanScore, computerScore)
// }

// let humanScore = 0
// let computerScore = 0
// function playGame(){
//     humanChoice = getHumanChoice()
//     computerChoice = getComputerChoice()
//     playRound(humanChoice, computerChoice)
//     console.log(humanScore, computerScore)
// }
//Variables

let humanScore = 0;
let computerScore = 0;

// 1. Connect each button with each choice.

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playBtn = document.querySelector('#play');

let playerChoice = "";

// 2. Create a on click response

rock.addEventListener("click", () => humanChoice('rock'));
paper.addEventListener("click", () => humanChoice('paper'));
scissors.addEventListener("click", () => humanChoice('scissors'));
playBtn.addEventListener("click", () => playRound(playerChoice, getComputerChoice()));

// 3. Get human choice and highlight it

function humanChoice(choice){
    playerChoice = choice[0].toUpperCase() + choice.slice(1);
    console.log(choice + ' clicked', playerChoice)
    //add style on button selected.
    selectedBtn(choice)
    return playerChoice
}
function selectedBtn(choice){
    document.querySelectorAll("button").forEach(btn => { 
       btn.classList.remove("active")
    });
    document.getElementById(choice).classList.add("active");
}
function removeActive(choice){
    document.getElementById(choice).classList.remove("active");
}

// 4. Get Computer choice

function getComputerChoice(){
    i = Math.floor(Math.random() * 3)
    if (i == 0){    
        return 'Rock'
    } else if (i == 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
};

// 5. Play the game

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice()
    if (humanChoice === computerChoice) {
        document.querySelector(".comments").textContent = "You tied this round!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ){
        humanScore++;
        document.querySelector(".comments").textContent = "You win this round!";
        updateScoreDisplay();
        }
    else {
        computerScore++;
        document.querySelector(".comments").textContent = "You lost this round!";
        updateScoreDisplay();
    }
    document.querySelectorAll("button").forEach(btn => { 
        btn.classList.remove("active")
     });
}

function updateScoreDisplay() {
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
}
