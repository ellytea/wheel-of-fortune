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
  },

  displayPuzzleBoxes() {
    let answerArr = game.puzzle.splitAnswer();
    let row1 = $('.row1 div');
    // console.log(row1)
    let row2 = $('.row2 div');
    // console.log(row2)
    let row3 = $('.row3 div');
    // console.log(row3)
    let row4 = $('.row4 div');
    // console.log(row4)
    console.log(answerArr[0]);
    for (let i = 2; i <= 12; i++) {
      if (answerArr[0].indexOf() !== ' ') {
      $(row1[i]).css({'background': '#fff'});

      }
    }
    // $(boxArray[2]).css({'background': '#fff'}).text('Y')
  },
  
}

if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}