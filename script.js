// Create a game of Rock, Paper & Scissors

// have function pick a random number from 1 - 3, use if statements 
//to assign each number to a choice
// function getComputerChoice() will randomly return Rock, Paper, or Scissors


function getRandomNumber(){ 
    let randomNumber = Math.floor(Math.random() * (4-1) + 1);
    return randomNumber; 
}

function getComputerChoice(){
    computerChoice = getRandomNumber();
    switch(computerChoice){
        case 1: 
            computerChoice = "Rock";
            break;
        case 2: 
            computerChoice = "Paper"; 
            break;
        case 3: 
            computerChoice = "Scissors"; 
            break;
    }
    return computerChoice; 
}


function rockPaperScissors(playerChoice){
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice){
        console.log("tie");
    }
    else if (playerChoice === "paper" && computerChoice === "rock"){
        console.log("Player wins");
    }
    else if (playerChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins");
    }
    else if (playerChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer wins");
    }
    else if (playerChoice === "scissors" && computerChoice === "paper"){
        console.log("Player wins"); 
    }
    else if (computerChoice === "scissors" && playerChoice === "paper" ){
        console.log("Computer wins"); 
    }
    else if (computerChoice === "paper" && playerChoice === "rock"){
        console.log("Computer wins"); 
    }
    else if (computerChoice === "scissors" && playerChoice === "rock"){
        console.log("Player wins");
    }

    

    console.log(`
    Player: ${playerChoice}, 
    COMP CHOICE: ${computerChoice}`); 
}

let userChoice = prompt("Enter in Rock, Paper, or Scissors"); 
rockPaperScissors(userChoice); 