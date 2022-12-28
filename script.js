// 1) Get the computer's choice (should choose one of 3: Rock, paper, scissors)

const getComputerChoice = Math.floor(Math.random() * 3 + 1);
console.log(getComputerChoice);

function computerSelection() {
  if (getComputerChoice === 1) {
    return "rock";
  } else if (getComputerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
// 2) Get player's choice using a prompt

const playerChooses = prompt("Rock, Paper or Scissors?");
const playerSelection = playerChooses.toLowerCase();
console.log(playerSelection);

// 3) Make a function that plays 1 round (if else statements I guess?)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's a draw";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's a draw";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beat Rock";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's a draw";
  } else {
    alert("You didn't choose a valid option");
  }
}

playRound(playerSelection, computerSelection);
// 4)
