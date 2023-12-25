let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerMove) {
  if(playerScore >= 5 || computerScore >= 5) {
    updateResult("Game over. Please refresh the page to start again.");
    return;
  }

  const computerMove = pickComputerMove();
  const result = determineWinner(playerMove, computerMove);

  updateScore(result);
  updateResult(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
  checkForWinner();
}

function pickComputerMove() {
  const moves = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function determineWinner(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return 'Tie.';
  }

  if ((playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'scissors' && computerMove === 'paper') ||
      (playerMove === 'paper' && computerMove === 'rock')) {
    playerScore++;
    return 'You win.';
  } else {
    computerScore++;
    return 'You lose.';
  }
}

function updateResult(text) {
  document.getElementById('result').textContent = text;
}

function updateScore(result) {
  document.getElementById('score').textContent = `Your Score: ${playerScore} | Computer Score: ${computerScore}`;
}

function checkForWinner() {
  if (playerScore === 5) {
    updateResult("Congratulations! You've won the game!");
  } else if (computerScore === 5) {
    updateResult("You lose.");
  }
}

