let game;

$('.start-game-btn').on('click', () => {
  game = new Game();
  domUpdates.getPlayers();
  game.createNewWheel();
  domUpdates.displayNewGame();
  domUpdates.displayPuzzleBoxes();
});

$('.spin-btn').on('click', () => {
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
  game.checkLetter(letter);
});

$('.solve-btn').on('click', () => {
  domUpdates.displayHideSolve();
});

$('.sovle-puzzle-btn').on('click', () => {
  game.puzzle.solvePuzzle();
});

$('.buy-btn').on('click', () => {
  game.currentPlayer.buyVowel();
});

if (typeof module !== 'undefined') {
  module.exports = index;
}
