let game;

function startNewGame() {
  game = new Game();
}

// invoke startNewGame on 'Start' button
startNewGame()

$('.catergory-text').text(`Category: ${game.getCategory()}`);
$('.round-text').text(`Round: ${game.currentRound}`);

function spin() {
  $('.spinner').addClass('spin');
  setTimeout(() => {
    $('.spinner').removeClass('spin');
  }, 2002)
}

$('.spin-btn').on('click', spin);



if (typeof module !== 'undefined') {
  module.exports = index;
}
