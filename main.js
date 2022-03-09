function computerPlay() {
  let handSignals = ["rock", "paper", "scissors"];
  let randChoice = handSignals[Math.floor(Math.random() * handSignals.length)];
  console.log(computerChoice);
}

// function returns the expected value - tested in browser

let playerSelection;
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
  switch (true) {
    case playerSelection == "rock" && computerSelection == "rock":
    case playerSelection == "paper" && computerSelection == "paper":
    case playerSelection == "scissors" && computerSelection == "scissors":
      console.log("DRAW!");
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
      console.log("You win! Rock beats Scissors");
      break;
    case playerSelection == "scissors" && computerSelection == "paper":
      console.log("You win! Scissors beats Paper");
      break;
    case playerSelection == "paper" && computerSelection == "rock":
      console.log("You win! Paper beats Rock");
      break;
  }
}
