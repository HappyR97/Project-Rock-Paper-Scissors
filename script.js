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
    return "Round result: You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Round result: You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Round result: You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Round result: You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Round result: You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Round result: You win! Scissors beat Rock";
  } else if (playerSelection === computerSelection) {
    return "Round result: It's a draw!";
  } else {
    alert("You didn't choose a valid option");
  }
}

const btnRock = document.querySelector(".btn--rock");
const btnPaper = document.querySelector(".btn--paper");
const btnScissors = document.querySelector(".btn--scissors");
const playerScoreDOM = document.querySelector(".playerScore");
const cpuChoice = document.querySelector(".cpuChoice");
const computerScoreDOM = document.querySelector(".computerScore");
const roundResult = document.querySelector(".roundResult");
const winner = document.querySelector(".winner");

const playGame = function (playerChoice) {
  if (playerScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    cpuChoice.textContent = `Computer chose: ${computerSelection}`;

    roundResult.textContent = playRound(playerChoice, computerSelection);
    playerScoreDOM.textContent = `Your score: ${playerScore}`;
    computerScoreDOM.textContent = `Computer score: ${computerScore}`;
  }
  if (playerScore >= 5) {
    winner.textContent = "You win the game 🏆";
    return;
  }
  if (computerScore >= 5) {
    winner.textContent = "You lost the game 😢";
    return;
  }
};

btnRock.addEventListener("click", function () {
  playGame("rock");
});
btnPaper.addEventListener("click", function () {
  playGame("paper");
});
btnScissors.addEventListener("click", function () {
  playGame("scissors");
});
