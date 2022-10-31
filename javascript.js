function firstPlay()
{
    let userDecision = prompt("Play game of RPS ? Y/N");
    while(userDecision !== "n" && userDecision !== "N" && userDecision !== "y" && userDecision !== "Y" && userDecision !== null && userDecision !== "")
        userDecision = prompt("Play game of RPS ? Y/N");
    if (userDecision === "N" || userDecision === "n" || userDecision === null)
        return 0;
    let exit = game();
    if(exit === -1)
        return (exit);
}

function replay() {
    let gameCount = 1;
    while(gameCount)
    {
        let userDecision = prompt("Play game ? Y/N");
        while(userDecision !== "Y" && userDecision !== "y" && userDecision !== "n" && userDecision !== "N" && userDecision !== null && userDecision !== "")
            userDecision = prompt("Play game ? Y/N");
        if(userDecision === "N" || userDecision === "n" || userDecision === null)
            return;
        let exitBis = game();
        if(exitBis === -1)
            return (exitBis);
        // game();
    }
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
    const SCOREMAX = 3;

    userPossibleChoices.forEach(element =>
    {
        element.addEventListener('click', e =>
        {
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
                // pScore = 0;
                // cScore = 0;
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
                return 1;
            }
            else if (cScore === SCOREMAX)
            {
                winnerName.textContent = "Computer";
                console.log("Computer wins !");
                // pScore = 0;
                // cScore = 0;
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
                return 1;
            }
        });
    })
}

function rockPaperScissors()
{
    let exit = firstPlay()
    if (exit === 0)
        return;
    if (exit === -1)
    {
        console.log("game aborted");
        return;
    }
    let exitBis = replay();
    if (exitBis === -1)
    {
        console.log("game aborted");
        return;
    }
    // return;
}

// rockPaperScissors();
game();
