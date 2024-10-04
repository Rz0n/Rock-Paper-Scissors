let humanScore = 0;
let computerScore = 0;


function getHumanChoise() {
    let humanChoises = prompt("What is you Choise?: ");
    console.log(humanChoises);
    
    return humanChoises;
}

getHumanChoise();

function getComputerChoise() {
    
    let randomComputerChoise = Math.random() * 3;

    if (randomComputerChoise <= 1){
        console.log("Rock");
    } else if (randomComputerChoise <= 2) {
        console.log('Scissors');
    } else {
        console.log("Paper");
    }


    return random;
}

getComputerChoise();

function playRound(humanChoise, computerChoise) {
    humanChoise = getHumanChoise();
    computerChoise = getComputerChoise();

    if (humanChoise === "Rock" && computerChoise === "Scissors" ){
        console.log("You win ");
    }
}

