// 1) Get the computer's choice (should choose one of 3: Rock, paper, scissors)

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beat Rock";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else {
    alert("You didn't choose a valid option");
  }
}

// const computerSelection = getComputerChoice();
// console.log(computerSelection);

const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");
const playerScoreDOM = document.querySelector(".playerScore");
const cpuChoice = document.querySelector(".cpuChoice");
const computerScoreDOM = document.querySelector(".computerScore");
const roundResult = document.querySelector(".roundResult");

btnRock.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  cpuChoice.textContent = `Computer chose: ${computerSelection}`;

  roundResult.textContent = playRound("rock", computerSelection);
  playerScoreDOM.textContent = `Your score: ${playerScore}`;
  computerScoreDOM.textContent = `Computer score: ${computerScore}`;
});
// btnPaper.addEventListener("click", playRound("paper", computerSelection));
// btnScissors.addEventListener("click", playRound("scissors", computerSelection));
// Play 5 rounds
// const game = function () {
//   for (let i = 0; i < 5; i++) {
//     getComputerChoice();
//     let computerSelection = getComputerChoice();
//     console.log(computerSelection);

//     let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

//     playRound(playerSelection, computerSelection);
//     console.log(score);
//   }
//   if (score >= 3) {
//     return "You win the game";
//   } else {
//     return "You lose the game.";
//   }
// };

// console.log(game());
