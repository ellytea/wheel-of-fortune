const domUpdates = {

  displayNewGame() {
   $('.catergory-text').text(`Category: ${game.getCategory()}`);
   $('.round-text').text(`Round: ${game.currentRound}`)
   $('.pop-up-screen').toggle();
   $('.player1-text').text(game.players[0].name);
   $('.player2-text').text(game.players[1].name);
   $('.player3-text').text(game.players[2].name);
   $('.spinner-score-text').text(`${game.currentPlayer.name}, spin!`);
  },

  displayNextRound() {
    $('.vowels').attr('disabled', 'true');
    $('.cons').removeAttr('disabled');
    $('.catergory-text').text(`Category: ${game.getCategory()}`);
    $('.round-text').text(`Round: ${game.currentRound}`);
    $('.spinner-score-text').text(`${game.currentPlayer.name}, spin!`);
    domUpdates.displayTotalScore();
    domUpdates.displayPuzzleBoxes();
  },

  spin() {
  $('.spinner').addClass('spin');
  setTimeout(() => {
    $('.spinner').removeClass('spin');
  }, 502);
},

  displaySpinElement() {
    let spinElem = game.currentWheel.currentElement;
    let checkElem = typeof spinElem;
    if (checkElem !== 'number') {
      $('.spinner-score-text').text(`Bummer! ${spinElem}`);
    } else {
      $('.spinner-score-text').text(`${spinElem}! Choose Letter`);
    }
  },

  displayPuzzleBoxes() {
    let answerArr = game.puzzle.splitAnswer();
    let row1 = $('.row1 div');
    let row2 = $('.row2 div');
    let row3 = $('.row3 div');
    let row4 = $('.row4 div');
    game.puzzle.checkCharacters(answerArr, row1, row2, row3, row4);
  },

  showLetters(letter) {
    const letters = $(`[data-value=${letter}]`);
    letters.removeClass('tile').addClass('correct-letter');
  },

  instructPlayer(currentPlayer) {
    $('.spinner-score-text').text(`${currentPlayer}, spin!`);
  },

  displayScore(playerScore) {
    if (game.players[0].turn === true) {
      $('.player1-score-text').text(`Score: ${game.currentPlayer.score += playerScore}`);
    } else if (game.players[1].turn === true) {
      $('.player2-score-text').text(`Score: ${game.currentPlayer.score += playerScore}`);
    } else {
      $('.player3-score-text').text(`Score: ${game.currentPlayer.score += playerScore}`);
    } 
  },

  displayTotalScore() {
    $('.player1-score-text').text(`Score: ${game.currentPlayer.score}`);
    $('.player2-score-text').text(`Score: ${game.currentPlayer.score}`);
    $('.player3-score-text').text(`Score: ${game.currentPlayer.score}`);
    if (game.players[0].turn === true) {
      $('.player1-total-text').text(`Total Score: ${game.currentPlayer.totalScore}`);
    } else if (game.players[1].turn === true) {  
      $('.player2-total-text').text(`Total Score: ${game.currentPlayer.totalScore}`);
    } else { 
      $('.player3-total-text').text(`Total Score: ${game.currentPlayer.totalScore}`);
    } 
  },

  displayUserSolve() {
   let popUpSolve = $('.pop-up-solve');
   popUpSolve.toggleClass('hide');
  },

  showAnswer() {
    $('.tile').removeClass('tile').addClass('correct-letter');
  },

  wipePuzzle() {
    let row1 = $('.row1 div').toArray();
    let row2 = $('.row2 div').toArray();
    let row3 = $('.row3 div').toArray();
    let row4 = $('.row4 div').toArray();
    let rows = row1.concat(row2, row3, row4)
    rows.forEach((row) => {
      $(row).removeClass('correct-letter').removeAttr('data-value').text('');
    });
  },
  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}