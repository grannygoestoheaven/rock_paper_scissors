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
        let userDecision = prompt("Play again ? Y/N");
        while(userDecision !== "Y" && userDecision !== "y" && userDecision !== "n" && userDecision !== "N" && userDecision !== null && userDecision !== "")
            userDecision = prompt("Play again ? Y/N");
        if(userDecision === "N" || userDecision === "n" || userDecision === null)
            return;
        let exit = game();
        if(exit === -1)
            return (exit);
    }
    return;
}

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

function checkWinner(cScore, pScore) /* function to use if we want to include the ties in the rounds count,
                                        which can lead to an equalty, or to a victory with just one or two rounds won. */
{
    if (cScore < pScore)
    {
        return 'Human wins !'
    }
    else if (pScore < cScore)
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
    let move = 1;
    let pScore = 0; // user score
    let cScore = 0; // computer score
    const SCOREMAX = 1;
    while (move < 6)
    {
        let userPlay = prompt("Enter Rock, Paper or Scissors :");
        if (userPlay === null) 
            return -1;  
        userPlay = userPlay.toLowerCase();
        while (userPlay !== 'rock' && userPlay !=='paper' && userPlay!== 'scissors')
        {
            alert('Enter valid choice bro');
            userPlay = prompt("Enter Rock, Paper or Scissors :");
            if (userPlay === null) 
                return -1;
            userPlay = userPlay.toLowerCase();
        }
        const computerChoice = computerPlay();
        console.log(`User chose ${userPlay}`);
        console.log(`Computer chose ${computerChoice}`);

        let singleRoundScore = playRound(computerChoice, userPlay);
        if (singleRoundScore === 1)
        {
            pScore++;
            console.log(`       Player score ${pScore}`);
            console.log(`       Computer score ${cScore}`);
        }
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
        if (pScore === SCOREMAX)
        {
            console.log("Human wins !");
            move++;
            return 1;
        }
        else if (cScore === SCOREMAX)
        {
            console.log("Computer wins !");
            move++;
            return 1;
        }
        // move++;
    }
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
}

rockPaperScissors();
