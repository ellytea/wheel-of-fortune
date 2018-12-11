class Puzzle {
  constructor() {
    this.puzzleArray = this.generatePuzzles();
    this.splitAnswerArr = null;
  }

  generatePuzzles() {
    let puzzleArray = Object.keys(data.puzzles);
    return puzzleArray.reduce((acc, puzzle) => {
      let objs = data.puzzles[puzzle].puzzle_bank;
      let random = Math.floor(Math.random() * objs.length);
      acc.unshift(objs[random]);
      return acc;
      }, []);
  }

  splitAnswer() {
    let answer = game.currentPuzzle.correct_answer;
    let wordArray = answer.toUpperCase().split(' ');
    const rows = [ [], [], [], [] ];
    let rowOneFull = false;
    let rowTwoFull = false;
    let rowThreeFull = false;

    wordArray.forEach((word) => {
      const arr = word.split('');
      arr.push(' ');
      
      if (((word.length + 1) + rows[0].length) <= 10 && !rowOneFull) {
        rows[0] = rows[0].concat(arr);
      } else if (((word.length + 1) + rows[1].length) <= 12 && !rowTwoFull) {
        rowOneFull = true;
        rows[1] = rows[1].concat(arr);
      } else if (((word.length + 1) + rows[2].length) <= 12 && !rowThreeFull) {
        rowTwoFull = true;
        rows[2] = rows[2].concat(arr);
      } else if (((word.length + 1) + rows[3].length) <= 10) {
        rowThreeFull = true;
        rows[3] = rows[3].concat(arr);
      }
    });
    this.splitAnswerArr = rows;
    return rows;
  }

  checkCharacters(array, row1, row2, row3, row4) {
    array[0].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row1[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row1[index+2]).addClass('tile').text(item).attr('data-value', item);
    });

    array[1].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row2[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row2[index+2]).addClass('tile').text(item).attr('data-value', item);
    });

    array[2].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row3[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row3[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
    
    array[3].forEach((item, index) => {
      if (item === ' ') return;
      if (item ==='\'' || item === '&') {
        $(row4[index+2]).addClass('correct-letter').text(item);  
        return
      }
      $(row4[index+2]).addClass('tile').text(item).attr('data-value', item);
    });
  }

};


if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}