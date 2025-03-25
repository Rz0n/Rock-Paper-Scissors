let humanScore = 0;
let computerScore = 0;



function getHumanChoise() {
  let human = prompt("Enter valid choise is Rock, Paper, Scissors");

  if (human === "Rock") {
    console.log("Rock");
  } else if (human === "Paper") {
    console.log("Paper")
  } else if (human === "Scissors") {
    console.log("Scissors");
  } else {
    console.log("That is not valid choise!!!!");
  }

  return human;
}





function getComputerChoise() {
  let choise = ['Rock', "Paper", "Scissors"];
  let randomChoise = choise[Math.floor(Math.random() * choise.length)];

  console.log(randomChoise);
  return randomChoise;
};




function playGround(humanChoise, computerChoise) {
    humanChoise = getHumanChoise();
    computerChoise = getComputerChoise();

    if(humanChoise === "Rock" && computerChoise === "Paper") {
      console.log("You lose! Rock lose to a Paper!");
    }

  return;
}


playGround();