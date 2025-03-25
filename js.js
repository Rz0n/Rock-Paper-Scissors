let humanScore = 0;
let computerScore = 0;



function getHumanChoise() {
  let human = prompt("Enter valid choise is Rock, Paper, Scissors");

  if (human === "Rock") {
    console.log("Your choise is Rock");
  } else if (human === "Paper") {
    console.log("Your choise is Paper")
  } else if (human === "Scissors") {
    console.log("your choise is Scissors");
  } else {
    console.log("That is not valid choise!!!!");
  }


}





function getComputerChoise() {
  let choise = ['Rock', "Paper", "Scissor"];
  let randomChoise = choise[Math.floor(Math.random() * choise.length)];

  console.log(randomChoise);
};




function playGround(humanChoise, computerChoise) {
    humanChoise = getHumanChoise();
    computerChoise = getComputerChoise();

  return;
}


playGround();