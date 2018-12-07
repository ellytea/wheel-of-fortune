const chai = require('chai');
const expect = chai.expect;
const Puzzle = require('../lib/Puzzle.js');
global.data = require('../lib/data.js');

describe('Puzzle', function() {

  let puzzle;

  beforeEach(function() {
    puzzle = new Puzzle();
  });

  it('should return array of four objects', function() {

    puzzle.generatePuzzles();

    expect(puzzle.puzzleArray.length).to.equal(4);
  });

  it('should indicate hidden letters and spaces on board', function() {

      puzzle.showBoxAmount();

      // we want to get access to the answer
      // then we want the the string to lowerCase
      // split the string
      // grab the length of the array
      // display the amount of boxes needed
      // if it contains a dash then display that dash
      // if it contains a "" then stay green
      // populate each element in that in order
  }) 

});