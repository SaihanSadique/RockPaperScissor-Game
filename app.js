
function getAction() {
    return Action = Math.floor(Math.random() * 3);
}

function playRound(computerAction, playerAction) {
    let playerAction = prompt("Enter your action (rock|paper|scissors)").toUpperCase();
    let computerAction = getAction();
    if (computerAction == 0) {
        computerAction = "ROCK";
    }
    else if (computerAction == 1) {
        computerAction = "PAPER";
    }
    else if (computerAction == 2) {
        computerAction = "SCISSORS";
    }
    switch (playerAction) {
        case 'ROCK':
            if (computerAction == "ROCK") {
                return prompt("It's a tie!");
            }
            if (computerAction == "PAPER") {
                ComputerWin += 1;
                return prompt("you lose!");
            }
            if (computerAction == "SCISSORS") {
                playerWin += 1;
                return prompt("you win!");
            }
        case 'PAPER':
            if (computerAction == "ROCK"){
                playerWin+=1;
                return prompt("you win!");
            }
            if (computerAction == "PAPER") {
                return prompt("it's a tie!");
            }
            if (computerAction == "SCISSORS") {
                ComputerWin+=1;
                return prompt("you lose!");
            }
        case 'SCISSORS':
            if (computerAction == "ROCK") {
                ComputerWin+=1;
                return prompt("you lose!");
            }
            if (computerAction == "PAPER") {
                playerWin+=1;
                return prompt("you win!");
            }
            if (computerAction == "SCISSORS") {
                return prompt("it's a tie!");
            }
        default: alert("invalid input, please try again!")
    }
}
let playerWin = 0, ComputerWin = 0; //First one to reach 5 wins, wins the BO5
while (playerWin < 5 || ComputerWin < 5) {
    playRound();
}
if (playerWin == 5)
    alert("Player wins the Best of five!")
if (ComputerWin == 5)
    alert("Computer wins the Best of five!")