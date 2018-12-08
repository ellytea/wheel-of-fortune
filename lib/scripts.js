let game;

function startNewGame() {
  game = new Game();
}

// invoke startNewGame on 'Start' button
startNewGame()

$('.catergory-text').text(`Category: ${game.getCategory()}`);
$('.round-text').text(`Round: ${game.currentRound}`)



if (typeof module !== 'undefined') {
  module.exports = index;
}
