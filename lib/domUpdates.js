const domUpdates = {
  
  newGame() {
   $('.catergory-text').text(`Category: ${game.getCategory()}`);
   $('.round-text').text(`Round: ${game.currentRound}`)
   $('.pop-up-screen').toggle();
   if ($('.player1-input').val() === '') {
     $('.player1-text').text('Player1');
   } else {
     $('.player1-text').text(game.players[0].name);
   }
   if ($('.player2-input').val() === '') {
     $('.player2-text').text('Player2');
   } else {
     $('.player2-text').text(game.players[1].name);
   }
   if ($('.player3-input').val() === '') {
     $('.player3-text').text('Player3');
   } else {
     $('.player3-text').text(game.players[2].name);
   }
  },

  displaySpinElement() {
    $('.spinner-score-text').text(`You spun: ${game.currentWheel.currentElement}`);
  }

  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}