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

    if (userChoice === null) {
      return;
    }

    while (!isValidSelection(userChoice)) {
      alert("Enter valid choice");
      userChoice = prompt("Choose between Rock, Paper and Scissors :");
    }

    const computerChoice = computerPlay();

    console.log(`User chose ${userChoice}`);
    console.log(`Computer chose ${computerChoice}`);

    let winner = getRoundWinner(computerChoice, userChoice);

    if (winner === players.user) {
      playerScore++;
      console.log(`       Player score ${playerScore}`);
      console.log(`       Computer score ${computerScore++}`);
    } else if (winner === players.computer) {
      computerScore++;
      console.log(`       Player score ${playerScore}`);
      console.log(`       Computer score ${computerScore++}`);
    } else {
      continue;
    }

    if (playerScore === maxVictories) {
      console.log("Human wins !");
      return;
    } else if (computerScore === maxVictories) {
      console.log("Computer wins !");
      return;
    }
    round++;
  }
  return;
}

function main() {
  let startGame = prompt("Play Game ? Y/N");
  if (startGame === "Y") {
    let gameCount = 1;
    while (gameCount <= 3) {
      game();
      gameCount++;
      startGame = prompt("Play again ? Y/N");
      if (startGame !== "Y") return ;
    }
  }
}

main();
