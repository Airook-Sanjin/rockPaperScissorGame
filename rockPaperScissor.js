const { countReset } = require("console");
const { userInfo } = require("os");
const prompt = require(`prompt-sync`)();
//--------------------------------------------
// const gameLogic = new Map([
//   ["rock", 1],
//   ["paper", 2],
//   ["scissor", 3],
// ]);
let tie = 0;
let userPoints = 0;
let compPoints = 0;
console.log("Welcome to the game");
while (true) {
  userAnswer = prompt("Do you want to play Rock Paper Scissors?\n yes or no?");

  if (userAnswer === "yes") {
    rpsGame(userAnswer);
    console.log(
      `Scores: tie = ${tie}\nUser = ${userPoints}\nComputer = ${compPoints}`
    );
  } else if (userAnswer === "no") {
    break;
  } else {
    console.log("That wasn't one of the options. Try again please.");
  }
}

function rpsGame() {
  if (userChoice === compChoice()) {
    tie++;
  } else if (userChoice === "rock" && compChoice("paper")) {
    compPoints++;
  } else if (userChoice === "paper" && compChoice("rock")) {
    userPoints++;
  } else if (userChoice === "scissors" && compChoice("rock")) {
    compPoints++;
  } else if (userChoice === "rock" && compChoice("scissors")) {
    userPoints++;
  }
}

function compChoice() {
  let cChoice = Math.floor(Math.random() * 3) + 1;
  let choice;
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
  console.log(`comp choice: ${choice}`);
  return choice;
}
//  compChoice = Math.random() * 256;
