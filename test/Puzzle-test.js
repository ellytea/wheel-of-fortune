const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Puzzle = require('../lib/Puzzle.js');
global.Game = require('../lib/Game.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../lib/domUpdates.js');

describe('Puzzle', function() {

  let puzzle;
  let game;

  beforeEach(function() {
    puzzle = new Puzzle();
    game = new Game();

    chai.spy.on(global.domUpdates, ['displayNewGame',
     'displayNextRound','spin','displaySpinElement',
     'displayPuzzleBoxes', 'showLetters', 'instructPlayer',
     'displayScore', 'displayTotalScore', 'displayUserSolve',
     'showAnswer', 'wipePuzzle'], () => true);
  });

  afterEach(function() {
    chai.spy.restore(global.domUpdates)
  });

  it('should create puzzle with 2 keys', function() {
    expect(puzzle).to.have.all.keys('puzzleArray', 'splitAnswerArr')
  })

  it('should return array of 4 objects', function() {
  puzzle.generatePuzzles();

    expect(puzzle.puzzleArray.length).to.equal(4);
  });

  it('should return array of 4 arrays', function() {
  puzzle.splitAnswer();

    expect(puzzle.splitAnswerArr).to.be.an('array');
  });

  it('not entirely sure on how to test this function', function() {
  puzzle.checkCharacters(array, row1, row2, row3, row4);

    expect(puzzle).to.equal();
  });
  
  it('should return array of 4 arrays', function() {
  puzzle.solvePuzzle();

    expect(domUpdates.displayHideSolve).to.have.been.called(1);
    expect(domUpdates.showAnswer).to.have.been.called(1);
    expect(domUpdates.displayHideSolve).to.have.been.called(1);
    expect(domUpdates.clearInput).to.have.been.called(1);
  });



});