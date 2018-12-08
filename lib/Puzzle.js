class Puzzle {
  constructor() {
    this.puzzleArray = this.generatePuzzles();
  }

  generatePuzzles() {
    let puzzleArray = Object.keys(data.puzzles);
    return puzzleArray.reduce((acc, puzzle) => {
      let objs = data.puzzles[puzzle].puzzle_bank;
      let random = Math.floor(Math.random() * (objs.length + 1));
      acc.unshift(objs[random]);
      return acc;
      }, []);
  }

  splitAnswer() {
    let answer = game.currentPuzzle.correct_answer;
    let wordArray = answer.toLowerCase().split(' ');
    const rows = [ [], [], [], [], ];

    wordArray.forEach((word) => {
      const arr = word.split('');
      arr.push(' ');
      if (((word.length + 1) + rows[0].length) <= 10) {
        rows[0] = rows[0].concat(arr);
      } else if (((word.length + 1) + rows[1].length) <= 12) {
        rows[1] = rows[1].concat(arr);
      } else if (((word.length + 1) + rows[2].length) <= 12) {
        rows[2] = rows[2].concat(arr);
      } else if (((word.length + 1) + rows[3].length) <= 10) {
        rows[3] = rows[3].concat(arr);
      }
    });

    return rows;
  }


  };


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}