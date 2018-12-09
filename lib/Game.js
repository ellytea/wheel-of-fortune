class Game {
  constructor(players, currentRound) {
    this.players = [];
    this.currentRound = 1;
    this.puzzle = new Puzzle();
    this.currentPuzzle = this.puzzle.puzzleArray[this.currentRound-1];
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