class Game {
  constructor(player1, player2, player3, currentRound) {
    this.players = [];
    this.currentRound = 1;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
  }

  nextRound() {
    this.currentRound++;
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
  }

  getCategory() {
    return this.currentPuzzle.category;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}