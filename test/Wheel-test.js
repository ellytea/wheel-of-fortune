const Wheel = require('../lib/Wheel.js');
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

global.Game = require('../lib/Game.js');
global.Puzzle = require('../lib/Puzzle.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../lib/domUpdates.js');

describe('Wheel', function() {

  let wheel;
  let game;

  beforeEach(function() {
    wheel = new Wheel();
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
 

  it('should add 6 elements to randomArray', function() {
    wheel.generateSixElements();

    expect(wheel.randomArray).to.have.lengthOf(6);
  });


});