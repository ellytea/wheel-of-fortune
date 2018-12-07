let game;

function startNewGame () {
  game = new Game()
}

// invoke startNewGame on 'Start' button
startNewGame()

$('.catergory-text').text(game.getCategory());

// $('#startGame').onClick(startNewGame)
// $('#restartGame').onClick(startNewGame)


if (typeof module !== 'undefined') {
  module.exports = index;
}
