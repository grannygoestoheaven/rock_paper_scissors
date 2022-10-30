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

// const playerScore = document.querySelector('.humanScore');
// const computerScore = document.querySelector('.computerScore');
// const winnerName = document.querySelector('.winnerName');

// let userPossibleChoices;
// let userChoice;
let computerChoice;
let singleRoundScore;

function game()
{
    // let move = 1;
    // let pScore = 0; // user score
    // let cScore = 0; // computer score
    // const SCOREMAX = 3;
    
    // while(move <= SCOREMAX)
    // {
    //     //Typing version with prompt command

    //     // let userChoice = prompt("Enter Rock, Paper or Scissors :");
    //     // if (userChoice === null) 
    //     //     return -1;  
    //     // userChoice = userChoice.toLowerCase();
    //     // while (userChoice !== 'rock' && userChoice !=='paper' && userChoice!== 'scissors')
    //     // {
    //     //     alert('Enter valid choice bro');
    //     //     userChoice = prompt("Enter Rock, Paper or Scissors :");
    //     //     if (userChoice === null) 
    //     //     return -1;
    //     //     userChoice = userChoice.toLowerCase();
    //     // }

        
    //     playerScore.textContent = `${pScore}`;
    //     computerScore.textContent = `${cScore}`;
    //     winnerName.textContent = "";
        
    //     const userPossibleChoices = document.querySelectorAll('.choice'); // --> returns the nodelist ["rock", "paper", "scissors"]
        
    //     console.log(userPossibleChoices);
    //     console.log(playerScore, computerScore, winnerName);
        
    //     userPossibleChoices.forEach(element => // I use a forEach method to loop over the elements of the "userPossibleChoices" nodelist ["rock", "paper", "scissors"]
    //     {
    //         element.addEventListener('click', () => // instructions to execute for every single element of the nodelist
    //         {
    //             // userChoice = e.target.dataset.name; // works too ^^
    //             const userChoice = element.textContent.toLowerCase(); // I assign the textContent of a single element to my variable userChoice
    //             if (userChoice === null)
    //                 return -1;
    //             const computerChoice = computerPlay(); // I assign the random choice of the computer to my variable computerChoice
    //             console.log(`player chose ${userChoice}, computer chose ${computerChoice}`);
    //             singleRoundScore = playRound(computerChoice, userChoice);
    //             console.log(singleRoundScore);
            
    //             if (singleRoundScore === 1)
    //             {
    //                 pScore++;
    //                 playerScore.textContent = `${pScore}`;
    //                 console.log(`       Player score ${pScore}`);
    //                 console.log(`       Computer score ${cScore}`);
    //             }
    //             else if (singleRoundScore === 0)
    //             {
    //                 cScore++;
    //                 computerScore.textContent = `${cScore}`
    //                 console.log(`       Player score ${pScore}`);
    //                 console.log(`       Computer score ${cScore}`);
    //             }
    
    //             if (pScore === SCOREMAX)
    //             {
    //                 winnerName.textContent = "Player";
    //                 console.log("Human wins !");
    //                 return 1;
    //             }
    //             else if (cScore === SCOREMAX)
    //             {
    //                 winnerName.textContent = "Computer";
    //                 console.log("Computer wins !");
    //                 return 1;
    //             }
    //         })
    //     });
    //     console.log("on en est là");
    //     move++;
    // }
    const playerScore = document.querySelector('.humanScore');
    const computerScore = document.querySelector('.computerScore');
    const winnerName = document.querySelector('.winnerName');

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
                computerScore.textContent = `${cScore}`
                console.log(`       Player score ${pScore}`);
                console.log(`       Computer score ${cScore}`);
            }
            
            if (pScore === SCOREMAX)
            {
                winnerName.textContent = "Player";
                console.log("Human wins !");
                pScore = 0;
                cScore = 0;
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
                return 1;
            }
            else if (cScore === SCOREMAX)
            {
                winnerName.textContent = "Computer";
                console.log("Computer wins !");
                pScore = 0;
                cScore = 0;
                playerScore.textContent = `${pScore}`;
                computerScore.textContent = `${cScore}`
                return 1;
            }
        });

        // console.log(element.dataset.name);
        // console.log(userPossibleChoices);
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
