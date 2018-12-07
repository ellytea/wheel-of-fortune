class Game {
  constructor(player1, player2, player3, round = 1) {
    this.players = [];
    this.currentRound = round;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[round-1];
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