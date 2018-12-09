class Game {
  constructor(players, currentRound) {
    this.players = [];
    this.currentRound = 1;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
    this.currentWheel = null;
  }

  createPlayers() {
    let playerOne = $('.player1-input').val();
    let playerTwo = $('.player2-input').val();
    let playerThree = $('.player3-input').val();
    let player1 = new Player(playerOne);
    let player2 = new Player(playerTwo);
    let player3 = new Player(playerThree);
    this.players.push(player1, player2, player3);
}

  getCategory() {
    return this.currentPuzzle.category;
  }

  createNewWheel() {
    this.currentWheel = new Wheel();
  }

  nextRound() {
    this.currentRound++;
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}