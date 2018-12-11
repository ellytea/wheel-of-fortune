class Game {
  constructor(players) {
    this.players = [];
    this.currentPlayer = null;
    this.currentRound = 1;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
    this.currentWheel = new Wheel();
  }

  createPlayers(playerOne, playerTwo, playerThree) {
    let player1 = new Player(playerOne, true);
    let player2 = new Player(playerTwo);
    let player3 = new Player(playerThree);
    this.players.push(player1, player2, player3);
    this.currentPlayer = this.players[0];
  }

  getCategory() {
    return this.currentPuzzle.category;
  }

  createNewWheel() {
    this.currentWheel = new Wheel();
  }

  checkAnswer(letter) {
    let letters = $(`[data-value=${letter}]`);
    let letterSum = letters.length;
    let playerScore = this.currentPlayer.score;
    let spinElmt = game.currentWheel.currentElement;
    let elmtType = typeof spinElmt;
    let boxLetters = this.puzzle.splitAnswerArr;
    let row1 = boxLetters[0];
    let row2 = boxLetters[1];
    let row3 = boxLetters[2];
    let row4 = boxLetters[3];
    let isInrows = row1.indexOf(letter) > -1 || row2.indexOf(letter) > -1 || row3.indexOf(letter) > -1 || row4.indexOf(letter) > -1;
    if (elmtType === 'number' && isInrows) {
      domUpdates.showLetters(letter);
      playerScore += spinElmt * letterSum;
      domUpdates.displayScore(playerScore);
      domUpdates.instructPlayer(this.currentPlayer.name);
    } else if (!isInrows) {
      $('.spinner-score-text').text('Nope!')
      this.currentPlayer.changePlayerTurn(this.currentPlayer);
    }
  }
 
  nextRound() {
    this.currentRound++;
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
    this.currentPlayer.addTotalScore(this.currentPlayer);
    domUpdates.wipePuzzle();
    domUpdates.displayNextRound();
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}