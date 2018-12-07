class Puzzle {
  constructor() {
    this.puzzleArray = this.generatePuzzles();
  }


  generatePuzzles() {
    let puzzleArray = Object.keys(data.puzzles);
    return puzzleArray.reduce((acc, puzzle) => {
      let objs = data.puzzles[puzzle].puzzle_bank;
      let random = Math.floor(Math.random() * objs.length) + 1;
      acc.unshift(objs[random]);
      return acc;
      }, []);
  }


  };


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}