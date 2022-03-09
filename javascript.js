function computerPlay() {
    let items = ['rock', 'paper', 'scissor'];
    let choice = items[Math.floor(Math.random() * items.length)];
    // console.log(`Computer chose ${choice}`);
    return choice;
}

function playRound(computerSelection, userSelection) {
    let cleanUserSelection = userSelection.toLowerCase();
    let winningMessage = 'You won :)';
    let losingMessage = 'You lost ^^';

    if (computerSelection === userSelection) {
        console.log('Equalty - Play again');
    }
    else if (computerSelection === 'rock' && userSelection === 'scissor') {
        return (`${losingMessage} rock beats scissor`);
    }
    else if (computerSelection === 'rock' && userSelection === 'paper') {
        return (`${winningMessage} paper beats rock`);
    }
    else if (computerSelection === 'paper' && userSelection === 'rock') {
        return (`${losingMessage} paper beats rock`);
    }
    else if (computerSelection === 'paper' && userSelection === 'scissor') {
        return (`${winningMessage} scissor beats paper`);
    }
    else if (computerSelection === 'scissor' && userSelection === 'paper') {
        return (`${losingMessage} scissor beats paper`);
    }
    else if (computerSelection === 'scissor' && userSelection === 'rock') {
        return (`${winningMessage} rock beats scissor`);
    }
}

const playerChoice = prompt('Write down your choice : ');
const computerChoice = computerPlay();
console.log(playRound(computerChoice, playerChoice));