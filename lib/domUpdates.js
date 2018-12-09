const domUpdates = {
  
  newGame() {
   $('.catergory-text').text(`Category: ${game.getCategory()}`);
   $('.round-text').text(`Round: ${game.currentRound}`)
   $('.pop-up-screen').toggle();
   $('.player1-text').text(game.players[0].name);
   $('.player2-text').text(game.players[1].name);
   $('.player3-text').text(game.players[2].name);
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}