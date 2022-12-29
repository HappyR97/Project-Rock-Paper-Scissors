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

let score = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    score++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    score++;
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    score++;
    return "You win! Scissors beat Rock";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else {
    alert("You didn't choose a valid option");
  }
}

const game = function () {
  for (let i = 0; i < 5; i++) {
    getComputerChoice();
    let computerSelection = getComputerChoice();
    console.log(computerSelection);

    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

    playRound(playerSelection, computerSelection);
    console.log(score);
  }
  if (score >= 3) {
    return "You win the game";
  } else {
    return "You lose the game.";
  }
};

game();
