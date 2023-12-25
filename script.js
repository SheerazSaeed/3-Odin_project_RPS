document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  const result = determineWinner(playerMove, computerMove);
  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
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
    return 'You win.';
  }

  return 'You lose.';
}
