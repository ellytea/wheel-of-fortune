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

});