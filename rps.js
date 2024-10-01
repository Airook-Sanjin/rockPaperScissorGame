let tie = 0;
let userPoints = 0;
let compPoints = 0;
const cPoints = document.createElement("h2");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let points = document.createElement("h2");
let split = document.getElementById("split");
if (
  rock.addEventListener("click", function () {
    userChoice = "rock";
    rpsGame();
  })
);
else if (
  paper.addEventListener("click", function () {
    userChoice = "paper";
    rpsGame();
  })
);
else if (
  scissors.addEventListener("click", function () {
    userChoice = "scissors";
    rpsGame();
  })
);

function rpsGame() {
  let coChoice = compChoice();
  if (userChoice === coChoice) {
    tie++;
  } else if (userChoice === "rock" && coChoice ==="paper") {
    compPoints++;
  } else if (userChoice === "paper" && coChoice==="rock") {
    userPoints++;
  } else if (userChoice === "scissors" && coChoice==="rock") {
    compPoints++;
  } else if (userChoice === "rock" && coChoice==="scissors") {
    userPoints++;
  }else if (userChoice === "paper" && coChoice==="scissors") {
    compPoints++;
  } else if (userChoice === "scissors" && coChoice==="paper") {
    userPoints++;
  }
  points.innerHTML = `Computer points :${compPoints} --- User points: ${userPoints} --- ties: ${tie}`;
  split.appendChild(points);
  
  cPoints.innerHTML = `Comp choice: ${coChoice}`;
  split.appendChild(cPoints);

}
function compChoice() {
  let cChoice = Math.floor(Math.random() * 3) + 1;
  let choice;
  const cPoints = document.createElement("h2");
  switch (cChoice) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
//   cPoints.innerHTML = `comp choice: ${choice}`;
//   split.appendChild(cPoints);
  return choice;
}
