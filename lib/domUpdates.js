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

  displaySpinElement() {
    let spinElem = game.currentWheel.currentElement;
    let checkElem = typeof spinElem;
    if (checkElem !== 'number') {
      $('.spinner-score-text').text(`Bummer! ${spinElem}`);
    } else {
      $('.spinner-score-text').text(`You spun: ${spinElem}`);
    }
  },

  displayPuzzleBoxes() {
    let answerArr = game.puzzle.splitAnswer();
    let row1 = $('.row1 div');
    let row2 = $('.row2 div');
    let row3 = $('.row3 div');
    let row4 = $('.row4 div');

    answerArr[0].forEach((item, index) => {
      if (item === ' ') return;
      $(row1[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[1].forEach((item, index) => {
      if (item === ' ') return;
      $(row2[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[2].forEach((item, index) => {
      if (item === ' ') return;
      $(row3[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[3].forEach((item, index) => {
      if (item === ' ') return;
      $(row4[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
  },

  showLetters(letter) {
    const letters = $(`[data-value=${letter}]`);
    const letterSum = letters.length;
    // access current spin element and multiply by letterSum to add to round points if correct
    // Update player's points
    letters.removeClass('tile').css({'color': '#000', 'font-size': '2em', 'background': '#fff'});
  },

  instructPlayer(currentPlayer) {

  },
  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}