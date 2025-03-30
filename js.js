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
      const value = Number(localStorage.getItem("inCout")) || 0;
      computerScore = value + 1;
      localStorage.setItem("inCout", computerScore);
    } else if(humanChoise === "Rock" && computerChoise === "Scissors") {
      console.log("You Win! Rock beats Scissors");
      const value = Number(localStorage.getItem("inCout")) || 0;
      humanScore = value + 1;
      localStorage.setItem("inCout", humanScore);
    } else if(humanChoise === "Rock" && computerChoise === "Rock") {
      console.log("Is a Tie!");
    } else if(humanChoise === "Paper" && computerChoise === "Rock") {
      console.log("You Win! Paper beats Rock");
      const value = Number(localStorage.getItem("inCout")) || 0;
      humanScore = value + 1;
      localStorage.setItem("inCout", humanScore);
    } else if(humanChoise === "Paper" && computerChoise === "Paper") {
      console.log("Is a Tie!");
    } else if(humanChoise === "Paper" && computerChoise ==="Scissors") {
      console.log("You lose! Paper lose to Scissors");
      const value = Number(localStorage.getItem("inCout")) || 0;
      computerScore = value + 1;
      localStorage.setItem("inCout", computerScore);
    } else if(humanChoise === "Scissors" && computerChoise === "Rock") {
      console.log("You lose! Scissors lose to Rock");
      const value = Number(localStorage.getItem("inCout")) || 0;
      computerScore = value + 1;
      localStorage.setItem("inCout", computerScore);
    } else if(humanChoise === "Scissors" && computerChoise === "Paper") {
      console.log("You Win! Scissor beats Paper");
      const value = Number(localStorage.getItem("inCout")) || 0;
      humanScore = value + 1;
      localStorage.setItem("inCout", humanScore);
    } else if(humanChoise === "Scissors" && computerChoise === "Scissors") {
      console.log("Is a Tie!");
    }

  return;
}


playGround();




console.log(`Computer Score: ${computerScore}`);
console.log(`Human Score: ${humanScore}`);