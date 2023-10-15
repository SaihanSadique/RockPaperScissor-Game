
function getAction(){
    return Action = Math.floor(Math.random()*3);
}
let playerAction = prompt("Enter your action (rock|paper|scissors)")
let computerAction = getAction();
function playRound(computerAction,playerAction){
    if(computerAction == 0){
        computerAction = "ROCK";
    }
    else if(computerAction == 1){
        computerAction = "PAPER";
    }
    else if(computerAction == 2){
        computerAction = "SCISSORS";
    }
    playerAction = playerAction.toUpperCase();
    switch (playerAction)
    {
        case 'ROCK':
            if(computerAction == "ROCK") return prompt("It's a tie!");
            if(computerAction == "PAPER") return prompt("you lose!");
            if(computerAction == "SCISSORS") return prompt("you win!");
        case 'PAPER':
            if(computerAction == "ROCK") return prompt("you win!");
            if(computerAction == "PAPER") return prompt("it's a tie!");
            if(computerAction == "SCISSORS") return prompt("you lose!");
        case 'SCISSORS':
            if(computerAction == "ROCK") return prompt("you lose!");
            if(computerAction == "PAPER") return prompt("you win!");
            if(computerAction == "SCISSORS") return prompt("it's a tie!");
        default: prompt("invalid input, please try again!")

    }
}