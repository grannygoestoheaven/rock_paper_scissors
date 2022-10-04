
function playAndReplay() {
    let gameCount = 0;
    while(gameCount === 0) {
        let userDecision = prompt("Play Rock Paper Scissors ? Y/N");
        if(userDecision === "N" || userDecision === "n" || userDecision === null)
            return;
        while(userDecision !== "Y" && userDecision !== "y")
            userDecision = prompt("Play Rock Paper Scissors ? Y/N");
        game();
        gameCount ++;
    }
    while(gameCount > 0) {
        let userDecision = prompt("Play again ? Y/N");
        // if (userDecision === "Y" || userDecision === "y")
        // while(userDecision !== "Y" && userDecision !== "y")
        if(userDecision === "N" || userDecision === "n" || userDecision === null)
            return;
        while(userDecision !== "Y" && userDecision !== "y")
            userDecision = prompt("Play again Y/N");
        game();
    }
    return;
}

function computerPlay() {
    let items = ['rock', 'paper', 'scissors'];
    let choice = items[Math.floor(Math.random() * items.length)];
    // let choice = 'rock';
    return choice;
}

function playRound(computerSelection, userSelection) {
    
    let winningMessage = 'You won :)';
    let losingMessage = 'You lost mazza fackaaa ^^';
    
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
    while (move)
    {
        let userPlay = prompt("Choose between Rock, Paper and Scissors :");
        if (userPlay === null) {
                return 0;
        };
        userPlay = userPlay.toLowerCase();
        while (userPlay !== 'rock' && userPlay !=='paper' && userPlay!== 'scissors') {
            alert('Enter valid choice');
            userPlay = prompt("Choose between Rock, Paper and Scissors :");
            userPlay = userPlay.toLowerCase();
        }
        // const userPossibleChoices = document.querySelectorAll('[data-name]');
        // const userPlay = '';
        // userPossibleChoices.forEach((element) => {
        //     element.addEventListener('click', e => {
        //         if (element.dataset.name !== null) {
        //             userPlay = element.dataset.name;
        //         }
        //     })
        // });

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
        if (pScore === 1)
        {
            console.log("Human wins !");
            move++;
            return 1;
        }
        else if (cScore === 1)
        {
            console.log("Computer wins !");
            move++;
            return 0;
        }
    }
    // checkWinner(cScore, pScore);
    return 0;

    // console.log(winner);
}

playAndReplay();

// game();
// replay();

// let startGame = prompt('Play Game ? Y/N');
// if (startGame === 'Y') {
//     let gameCount = 1;
//     while (gameCount <= 3) {
//                 game();
//                 // if (game === 0){
//                 //     let playerVicory;
//                 //     let computerVictory;
//                 // }
//                 gameCount++;
//                 startGame = prompt("Play again ? Y/N");
//                 if(startGame !== 'Y') {
//                     gameCount === 4;
//                 }
//             };
//         }
