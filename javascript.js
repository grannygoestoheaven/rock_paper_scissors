function computerPlay() {
    
    let items = ['rock', 'paper', 'scissors'];
    let choice = items[Math.floor(Math.random() * items.length)];
    return choice;
}

function playRound(computerSelection, userSelection) {
    
    let winningMessage = 'You won :)';
    let losingMessage = 'You lost ^^';
    
    if (computerSelection === 'rock' && userSelection === 'scissors')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'rock' && userSelection === 'paper')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (computerSelection === 'paper' && userSelection === 'rock')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'paper' && userSelection === 'scissors')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else if (computerSelection === 'scissors' && userSelection === 'paper')
    {
        console.log(`   ${losingMessage} ${computerSelection} beats ${userSelection}`);
        return 0;
    }
    else if (computerSelection === 'scissors' && userSelection === 'rock')
    {
        console.log(`   ${winningMessage} ${userSelection} beats ${computerSelection}`);
        return 1;
    }
    else
    {
        console.log("   It's a tie !");
        return (-1);
    }
}

function checkWinner(scoreA, scoreB)
{
    if (scoreA < scoreB)
    {
        return 'Human wins !'
    }
    else if (scoreB < scoreA)
    {
        return 'Computer beats human !'
    }
    else
    {
        return "No one wins --> Replay";
    }
}

function game()
{
    let round = 1;
    let pScore = 0; // user score
    let cScore = 0; // computer score
    while (round <= 5)
    {
        const userChoice = prompt("Choose between Rock, Paper and Scissors :");
        const computerChoice = computerPlay();
        console.log(`User chose ${userChoice}`);
        console.log(`Computer chose ${computerChoice}`);

        let singleRoundScore = playRound(computerChoice, userChoice);
        
        // if (playRound(computerChoice, userChoice) === 1)
        if (singleRoundScore === 1)
        {
            pScore++;
            console.log(`       Player score ${pScore}`);
            console.log(`       Computer score ${cScore}`);
        }
        // else if (playRound(computerChoice, userChoice) === 0)
        else if (singleRoundScore === 0)
        {
            cScore++;
            console.log(`       Player score ${pScore}`);
            console.log(`       Computer score ${cScore}`);
        }
        else 
        {
            continue;
        }
        if (pScore === 3)
        {
            console.log("Human wins !");
            return;
        }
        else if (cScore === 3)
        {
            console.log("Computer wins !");
            return;
        }
        round++;
    }
    return 0;
    // checkWinner(cScore, pScore); this function is here if we want to include the ties in the rounds count,
    // which can lead to an equalty or to a victory with just one or two rounds won.
    // console.log(winner);
}

console.log(game());