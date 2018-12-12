let game;
let player;


$('.start-game-btn').on('click', function startNewGame() {
  game = new Game();
  let playerOne = $('.player1-input').val();
  let playerTwo = $('.player2-input').val();
  let playerThree = $('.player3-input').val();
  game.createPlayers(playerOne, playerTwo, playerThree);
  domUpdates.displayNewGame();
  domUpdates.displayPuzzleBoxes();
});


$('.spin-btn').on('click', function spinner() {
  game.currentWheel.generateSixElements();
  game.currentWheel.checkSpinElement();
  domUpdates.spin();
  setTimeout(() => {
    domUpdates.displaySpinElement();
  }, 504);
});

$('.letters').on('click', (e) => {
  const letter = $(e.target).text();
  $(e.target).attr('disabled', 'true');
  game.checkAnswer(letter);
});

$('.solve-btn').on('click', function solveDisplay() {
  domUpdates.displayUserSolve();
});

$('.sovle-puzzle-btn').on('click', function solvePuzzle() {
  game.puzzle.solvePuzzle();
})

if (typeof module !== 'undefined') {
  module.exports = index;
}
