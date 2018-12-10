let game;
let player;


function startNewGame() {
  game = new Game();
  player = new Player();
  game.createPlayers();
  domUpdates.newGame();
  domUpdates.displayPuzzleBoxes();
}


function spin() {
  $('.spinner').addClass('spin');
  setTimeout(() => {
    $('.spinner').removeClass('spin');
  }, 500);
}

function spinner() {
  game.currentWheel.getSpinResult();
  spin();
  setTimeout(() => {
    domUpdates.displaySpinElement();
  }, 502)
}

$('.start-game-btn').on('click', startNewGame);
$('.spin-btn').on('click', spinner);
$('.letters').on('click', (e) => {
  const letter = e.target.textContent
  domUpdates.showLetters(letter)
})


if (typeof module !== 'undefined') {
  module.exports = index;
}
