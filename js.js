let min = 1;
let max = 3;

let play = 5;

let randomNumber;


let player = prompt("Make your Choise");


function computerChoise(choise) {
    
    let randomNumber = Math.floor(Math.random() * max) + min;

    
    if (randomNumber == 1) {
        choise = "Rock";
    } else if (randomNumber == 2) {
        choise = "Paper";
    } else {
        choise = "Scissors";
    }

    return choise;
}


function playGround() {

    if (player == "Rock" && computer == "Rock") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Is a Tie`);
    } else if (player == "Rock" && computer == "Paper") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Rock lose Paper!!\nComputer Win!!`);
    } else if (player == "Rock" && computer == "Scissors") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Rock beats Scissors!!\nPlayer Win!!`);
    } else if (player == "Paper" && computer == "Rock") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Paper beats Rock!!\nPlayer Win!!`);
    } else if (player == "Paper" && computer == "Paper") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Is a tie!!`);
    } else if (player == "Paper" && computer == "Scissors") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Paper lose to Scissors!!\nComputer Win!!`);
    } else if (player == "Scissors" && computer == "Rock") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Scissors lose to Rock!!\nComputer Win!!`);
    } else if (player == "Scissors" && computer == "Paper") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Scissors beats Paper!!\nPlayer Win!!`);
    } else if (player == "Scissors" && computer == "Scissors") {
        console.log(player);
        console.log(computer);
        console.log(`${player} vs ${computer}: Is a tie!!`);
    }

}

let computer = computerChoise();


playGround();