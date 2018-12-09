class Game {
  constructor(players, round = 1) {
    this.players = [];
    this.currentRound = round;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[round-1];
    this.currentWheel = null;
  }

  nextRound() {
    this.currentRound++;
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
  }

  getCategory() {
    return this.currentPuzzle.category;
  }

  createNewWheel() {
    this.currentWheel = new Wheel();
  }


}

if (typeof module !== 'undefined') {
  module.exports = Game;
}