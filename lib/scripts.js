let game;
let player;


function startNewGame() {
  game = new Game();
  game.createPlayers();
  domUpdates.displayNewGame();
  domUpdates.displayPuzzleBoxes();
}

function spin() {
  $('.spinner').addClass('spin');
  setTimeout(() => {
    $('.spinner').removeClass('spin');
  }, 502);
}

function spinner() {
  game.currentWheel.getSpinResult();
  spin();
  setTimeout(() => {
    domUpdates.displaySpinElement();
  }, 504)
}

$('.start-game-btn').on('click', startNewGame);

$('.spin-btn').on('click', spinner);

$('.letters').on('click', (e) => {
  const letter = e.target.textContent;
  domUpdates.showLetters(letter);
  game.checkAnswer(letter);
});


if (typeof module !== 'undefined') {
  module.exports = index;
}
