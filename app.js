const playerName = prompt("Enter Player Name").toLowerCase();

const gameMode = prompt(
  "Would you like to play Single or Best Of Three?"
).toLowerCase();

if (gameMode === "single" || gameMode === "single mode") {
  singleMode();
} else {
  bestOf();
}

function bestOf() {
  let playerWin = 0;
  let botWin = 0;

  while (playerWin < 2 && botWin < 2) {
    let round = singleMode();
    if (round === "Player Wins!") {
      console.log((playerWin += 1));
    } else if (round === "Bot Wins!") {
      console.log((botWin += 1));
    }
  }

  if (botWin === 2) {
    alert("Bot Wins The Game!");
  } else if (playerWin === 2) {
    alert("Player Wins The Game!");
  }
}

function singleMode() {
  let playerChoice = prompt(
    "Enter your choice: Rock, Paper or Scissors"
  ).toLowerCase();
  let botChoice = botRoll();
  let winResult = results(botChoice, playerChoice);

  function botRoll() {
    botRoll = Math.floor(Math.random() * (3 - 0) + 0);
    choice = "";

    if (botRoll === 0) {
      choice = "scissors";
    } else if (botRoll === 1) {
      choice = "rock";
    } else if (botRoll === 2) {
      choice = "paper";
    }
    return choice;
  }
  function results(botChoice, playerChoice) {
    if (botChoice === playerChoice) {
      return "It's a draw!";
    } else if (botChoice[0] === "s" && playerChoice[0] === "r") {
      return "Player Wins!";
    } else if (botChoice[0] === "r" && playerChoice[0] === "s") {
      return "Bot Wins!";
    } else if (botChoice[0] === "r" && playerChoice[0] === "p") {
      return "Player Wins!";
    } else if (botChoice[0] === "p" && playerChoice[0] === "r") {
      return "Bot Wins!";
    } else if (botChoice[0] === "p" && playerChoice[0] === "s") {
      return "Player Wins!";
    } else if (botChoice[0] === "s" && playerChoice[0] === "p") {
      return "Bot Wins!";
    }
  }

  alert(winResult);
  return winResult;
}
