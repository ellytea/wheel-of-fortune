let game;
let player;

function startNewGame () {
  game = new Game();
  player = new Player();
  createPlayers();
  domUpdates.newGame();
  game.createNewWheel();
}

function createPlayers() {
  let playerOne = $('.player1-input').val();
  let playerTwo = $('.player2-input').val();
  let playerThree = $('.player3-input').val();
  let player1 = new Player(playerOne);
  let player2 = new Player(playerTwo);
  let player3 = new Player(playerThree);
  game.players.push(player1, player2, player3);
}

function spinner() {
  game.currentWheel.getSpinResult();
  $('.spinner-score-text').text(`You spun: ${game.currentWheel.currentElement}`);
}

$('.start-game-btn').on('click', startNewGame);
$('.spin-btn').on('click', spinner);
// $('#startGame').onClick(startNewGame)
// $('#restartGame').onClick(startNewGame)

if (typeof module !== 'undefined') {
  module.exports = index;
}
