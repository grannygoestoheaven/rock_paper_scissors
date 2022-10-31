function replay()
{
    let userDecision = prompt("Replay ? Y/N");
    while(userDecision !== "Y" && userDecision !== "y" && userDecision !== "n" && userDecision !== "N" && userDecision !== null && userDecision !== "")
        userDecision = prompt("Replay ? Y/N");
    if(userDecision === "N" || userDecision === "n" || userDecision === null)
        return;
}

function computerPlay()
{
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
        console.log(`   ${winningMessage} ${userSelection} beat ${computerSelection}`);
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

let computerChoice;
let singleRoundScore;

function game()
{
    const playerScore = document.querySelector('.humanScore');
    const computerScore = document.querySelector('.computerScore');
    const winnerName = document.querySelector('.winnerName');
    const playerMove = document.querySelector('.humanMove');
    const computerMove = document.querySelector('.computerMove');

    const userPossibleChoices = document.querySelectorAll('button');
    console.log(userPossibleChoices)
    let userChoice;
    let computerChoice;
    let singleRoundScore;
    let pScore = 0;
    let cScore = 0;
    const SCOREMAX = 1;
    console.log(pScore);

    userPossibleChoices.forEach(element =>
    {
        element.addEventListener('click', e =>
        {
            playerScore.textContent = `${pScore}`;
            computerScore.textContent = `${cScore}`
            userChoice = e.target.dataset.name;
            computerChoice = computerPlay();
            console.log(`player chose ${userChoice}, computer chose ${computerChoice}`);

            winnerName.textContent = ''
            playerMove.textContent = `${userChoice}`
            computerMove.textContent = `${computerChoice}`;
            
            singleRoundScore = playRound(computerChoice, userChoice);
            console.log(singleRoundScore);

            if (singleRoundScore === 1)
            {
                pScore++;
                playerScore.textContent = `${pScore}`;
                console.log(`       Player score ${pScore}`);
                console.log(`       Computer score ${cScore}`);
            }
            else if (singleRoundScore === 0)
            {
                cScore++;
                computerScore.textContent = `${cScore}`;
                console.log(`       Player score ${pScore}`);
                console.log(`       Computer score ${cScore}`);
            }
            
            if (pScore === SCOREMAX)
            {
                winnerName.textContent = "Human";
                console.log("Human wins !");
                replay();
                // let userDecision = prompt("Replay ? Y/N");
                // while(userDecision !== "Y" && userDecision !== "y" && userDecision !== "n" && userDecision !== "N" && userDecision !== null && userDecision !== "")
                //     userDecision = prompt("Replay ? Y/N");
                // if(userDecision === "N" || userDecision === "n" || userDecision === null)
                //     return;
                pScore = 0;
                cScore = 0;
                winnerName.textContent = "";
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
                // game();
            }
            else if (cScore === SCOREMAX)
            {
                winnerName.textContent = "Computer";
                console.log("Computer wins !");
                replay();
                // let userDecision = prompt("Replay ? Y/N");
                // while(userDecision !== "Y" && userDecision !== "y" && userDecision !== "n" && userDecision !== "N" && userDecision !== null && userDecision !== "")
                //     userDecision = prompt("Replay ? Y/N");
                // if(userDecision === "N" || userDecision === "n" || userDecision === null)
                //     return;
                pScore = 0;
                cScore = 0;
                winnerName.textContent = "";
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
            }
        });
    })
}

// rockPaperScissors();
game();
