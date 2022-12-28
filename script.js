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

getComputerChoice();

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

const playRound = function (playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat Rock";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else {
    alert("You didn't choose a valid option");
  }
};

console.log(playRound(playerSelection, computerSelection));
