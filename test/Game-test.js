const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const Game = require('../lib/Game.js');
global.data = require('../lib/data.js');
global.domUpdates = require('../lib/domUpdates.js');

describe('Game', function() {

  let game;

  beforeEach(function() {
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
});