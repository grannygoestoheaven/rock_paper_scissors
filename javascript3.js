const choices = ["rock", "paper", "scissors"];
const winningCombinations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const players = { computer: "computer", user: "user" };

function isValidSelection(selection) {
  return choices.includes(selection);
}

function getRoundWinner(computerSelection, userSelection) {
  const selectionsAreValid =
    isValidSelection(computerSelection) && isValidSelection(userSelection);
  const selectionsAreEqual = computerSelection === userSelection;
  const computerBeatsUser =
    winningCombinations[computerSelection] === userSelection;

  return !selectionsAreValid || selectionsAreEqual
    ? null
    : computerBeatsUser
    ? players.computer
    : players.user;
}

function computerPlay() {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function getGameWinner(computerScore, playerScore) {
    return computerScore > playerScore
      ? players.computer
      : playerScore > computerScore
      ? players.user
      : null;
  }

  function game() {
    const maxVictories = 3;
    let round = 0;
    let playerScore = 0; // user score
    let computerScore = 0; // computer score
  
    while (playerScore <= maxVictories && computerScore <= maxVictories) {
      let userChoice = prompt("Choose between Rock, Paper and Scissors :");
    }
  
      if (userChoice === null) {
        return;
      }
    }