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

    answerArr[0].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row1[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row1[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[1].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row2[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row2[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[2].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row3[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row3[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    answerArr[3].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row4[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row4[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
  },

  showLetters(letter) {
    const letters = $(`[data-value=${letter}]`);
    letters.removeClass('tile').addClass('correct-letter');
  },

<<<<<<< Updated upstream
  instructPlayer(currentPlayer) {
    $('.spinner-score-text').text(`${currentPlayer}, spin!`);
  },
=======
  // instructPlayer(currentPlayer) {

  // },
>>>>>>> Stashed changes

  displayScore(playerScore) {
    if (game.players[0].turn === true) {
      $('.player1-score-text').text(`Score: ${playerScore}`);
    } else if (game.players[1].turn === true) {
      $('.player2-score-text').text(`Score: ${playerScore}`);
    } else {
      $('.player3-score-text').text(`Score: ${playerScore}`);
    } 
  },
  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}