// function to generate the computer's choice
function getComputerChoice() { 
    const comChoice = ["rock", "paper", "scissors"];
    return comChoice[Math.floor(Math.random(0)*3)];
}

// function to play one round
let score = 0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper"){
            --score;
            return "You lose, Paper beats Rock";
        }   else if (computerSelection === "scissors"){
            ++score;
            return "You win! Rock beats Scissors";
        } else return "Draw";
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            ++score;
            return "You win! Paper beats Rock";
        }   else if (computerSelection === "scissors"){
            --score;
            return "You lose, Scissors beat Paper";
        } else return "Draw";
    }

    if (playerSelection === "scissors" || "scissor") {
        if (computerSelection === "paper"){
            ++score;
            return "You win! Scissors beat Paper";
        }   else if (computerSelection === "rock"){
            --score;
            return "You lose, Rock beats Scissors";
        } else return "Draw";
    }
}

function game() {
    for (let i=0; i<5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Please enter Rock, Paper, or Scissors");
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (score > 0) {
        console.log("You win!");
    } else {console.log("You lose");}
}

// data for choices
let computerSelection;
let playerSelection;
console.log(game());