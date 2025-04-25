
// 1. Create variable for each btn 

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playBtn = document.querySelector('#play');
const comments = document.querySelector(".comments");
const resetBtn = document.querySelector("#reset");

//Other variables 

let playerChoice = "";
let humanScore = 0;
let computerScore = 0;

// Functions

// gets computer choice 
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

// gets human choice based on btn clicked + highlights btn selected
function humanChoice(choice){
    playerChoice = choice[0].toUpperCase() + choice.slice(1);
    console.log(choice + ' clicked', playerChoice)
    selectedBtn(choice) //add style on button selected.
    return playerChoice
}
function selectedBtn(choice){
    document.querySelectorAll("button").forEach(btn => { 
       btn.classList.remove("active")
    });
    document.getElementById(choice).classList.add("active");
}
function removeActive(choice){ //function to remove highlight on selected btn
    document.getElementById(choice).classList.remove("active");
}
// reseting the game function
function resetGame(){
    humanScore = 0;
    computerScore = 0;
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("active");
    })
    comments.textContent = "";
    updateScoreDisplay()
}
//updates scores
function updateScoreDisplay() {
    document.querySelector(".human-score").textContent = humanScore;
    document.querySelector(".computer-score").textContent = computerScore;
}
// Main functions to play the rock paper, scissors game
function playRound(humanChoice, computerChoice){
    if (humanScore >= 5 || computerScore >= 5){
        resetGame()
    } else {
        computerChoice = getComputerChoice()
        if (humanChoice === computerChoice) {
            comments.textContent = "You tied this round!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ){
            humanScore++;
            comments.textContent = "You win this round!";
            updateScoreDisplay();
            }
        else {
            computerScore++;
            comments.textContent = "You lost this round!";
            updateScoreDisplay();
        }
        document.querySelectorAll("button").forEach(btn => { 
            btn.classList.remove("active")
        });
    }
    if (humanScore == 5){
        comments.textContent = "YOU HAVE WON THE GAME !"
    } else if (computerScore == 5){
        comments.textContent = "YOU HAVE LOST TO THE COMPUTER!"
    }
}


rock.addEventListener("click", () => humanChoice('rock'));
paper.addEventListener("click", () => humanChoice('paper'));
scissors.addEventListener("click", () => humanChoice('scissors'));
playBtn.addEventListener("click", () => playRound(playerChoice, getComputerChoice()));
resetBtn.addEventListener("click", () => resetGame());

// 5. Play the game




