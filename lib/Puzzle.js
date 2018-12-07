class Puzzle {
  constructor() {
    this.puzzleBankArray = [];
  }

  let puzzleArray = Object.keys(data.puzzles);
  const getPuzzles = puzzleArray.reduce((acc, puzzle) => {
  let objs = data.puzzles[puzzle].puzzle_bank;
  let random = Math.floor(Math.random() * objs.length) + 1;
  acc.unshift(objs[random])
  return acc;
  }, []);

getPuzzles;

};


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}